import { Request } from "express";
import { Database, User, Spell } from "../types";
import {
  CASTING_TIMES,
  CLASSES,
  LEVELS,
  SAVES,
  SCHOOLS,
  TAGS,
} from "../constants";
import { SpellsFilter } from "../../graphql/resolvers/Spell/types";

export const authorize = async (
  db: Database,
  req: Request
): Promise<User | null> => {
  const token = req.get("X-CSRF-TOKEN");
  const viewer = await db.users.findOne({
    _id: req.signedCookies.viewer,
    token,
  });

  return viewer;
};

interface Match {
  school?: { $in: string[] };
  castingTime?: { $in: string[] };
  level?: { $in: string[] };
  classes?: { $in: string[] };
  saveRequired?: { $in: string[] };
  tags?: { $in: string[] };
}

interface Query {
  $match: Match;
}

export const createFilterQuery = (filterValues: SpellsFilter[]) => {
  let query: Query = { $match: {} };
  const schools: SpellsFilter[] = [];
  const castingTimes: SpellsFilter[] = [];
  const levels: SpellsFilter[] = [];
  const classes: SpellsFilter[] = [];
  const saves: SpellsFilter[] = [];
  const tags: SpellsFilter[] = [];

  filterValues.map((value) => {
    if (Object.values(SCHOOLS).includes(value)) {
      return schools.push(value);
    }
    if (Object.values(CASTING_TIMES).includes(value)) {
      return castingTimes.push(value);
    }
    if (Object.values(LEVELS).includes(value)) {
      return levels.push(value);
    }
    if (Object.values(CLASSES).includes(value)) {
      return classes.push(value);
    }
    if (Object.values(SAVES).includes(value)) {
      return saves.push(value);
    }
    if (Object.values(TAGS).includes(value)) {
      return tags.push(value);
    }
  });

  if (schools && schools.length) {
    query["$match"]["school"] = { $in: schools };
  }
  if (castingTimes && castingTimes.length) {
    query["$match"]["castingTime"] = { $in: castingTimes };
  }
  if (levels && levels.length) {
    query["$match"]["level"] = { $in: levels };
  }
  if (classes && classes.length) {
    query["$match"]["classes"] = { $in: classes };
  }
  if (saves && saves.length) {
    query["$match"]["saveRequired"] = { $in: saves };
  }
  if (tags && tags.length) {
    query["$match"]["tags"] = { $in: tags };
  }

  return query;
};

export const orderCastingTimeQuery = {
  $project: {
    _id: 1,
    name: 1,
    level: 1,
    description: 1,
    school: 1,
    castingTime: 1,
    "range.value": 1,
    "range.unit": 1,
    "duration.value": 1,
    "duration.unit": 1,
    isConcentration: 1,
    isRitual: 1,
    "components.verbal": 1,
    "components.somatic": 1,
    "components.material": 1,
    source: 1,
    classes: 1,
    order: {
      $cond: {
        if: { $eq: ["$castingTime", "RECTION"] },
        then: 0,
        else: {
          $cond: {
            if: { $eq: ["$castingTime", "BONUS_ACTION"] },
            then: 1,
            else: {
              $cond: {
                if: { $eq: ["$castingTime", "ACTION"] },
                then: 2,
                else: {
                  $cond: {
                    if: { $eq: ["$castingTime", "ONE_MINUTE"] },
                    then: 3,
                    else: {
                      $cond: {
                        if: { $eq: ["$castingTime", "TEN_MINUTES"] },
                        then: 4,
                        else: {
                          $cond: {
                            if: { $eq: ["$castingTime", "ONE_HOUR"] },
                            then: 5,
                            else: {
                              $cond: {
                                if: {
                                  $eq: ["$castingTime", "EIGHT_HOURS"],
                                },
                                then: 6,
                                else: {
                                  $cond: {
                                    if: {
                                      $eq: ["$castingTime", "TWELVE_HOURS"],
                                    },
                                    then: 7,
                                    else: {
                                      $cond: {
                                        if: {
                                          $eq: [
                                            "$castingTime",
                                            "TWENTYFOUR_HOURS",
                                          ],
                                        },
                                        then: 8,
                                        else: 9,
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    // Add other keys in here as necessary
  },
};
