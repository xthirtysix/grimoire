import { Request } from "express";
import { Database, User } from "../types";
import { Schools } from "../constants";

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

export const createFilterQuery = (filterValues: string[]) => {
  const query: any = { $match: {} };
  const schools: string[] = [];
  const castingTimes: string[] = [];

  filterValues.map((value) => {
    return Object.values(Schools).includes(value)
      ? schools.push(value)
      : castingTimes.push(value);
  });

  if (schools && schools.length) {
    query["$match"]["school"] = { $in: schools };
  }
  if (castingTimes && castingTimes.length) {
    query["$match"]["castingTime"] = { $in: castingTimes };
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
    "components.verbal": 1,
    "components.somatic": 1,
    "components.material": 1,
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
