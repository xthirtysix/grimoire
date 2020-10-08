import { Request } from "express";
import { Database, User } from "../types";
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

interface Query {
  [key: string]: {[key: string]: any}
}

export const createFilterQuery = (filter: SpellsFilter): Query => {
  const query: Query = { $match: {} };
  const filters = Object.entries(filter);

  filters.map(([type, values]) => {
    values.length ? (query["$match"][type] = { $in: values }) : null;
  });

  return query;
};

export const orderCastingTimeQuery = {
  $project: {
    _id: 1,
    name: 1,
    level: 1,
    school: 1,
    castingTime: 1,
    "range.value": 1,
    "range.unit": 1,
    "duration.value": 1,
    "duration.unit": 1,
    "components.verbal": 1,
    "components.somatic": 1,
    "components.material": 1,
    isConcentration: 1,
    isRitual: 1,
    materials: 1,
    description: 1,
    conditions: 1,
    "damageDice.quantity": 1,
    "damageDice.dice": 1,
    "damageScale.level": 1,
    "damageScale.dice": 1,
    attackType: 1,
    effectType: 1,
    saveRequired: 1,
    atHigherLevels: 1,
    atHigherSlots: 1,
    tags: 1,
    classes: 1,
    source: 1,
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
