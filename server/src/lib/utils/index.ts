import { Request } from "express";
import { ObjectId } from "mongodb";
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

export const createFilterQuery = (
  filterValue: string[],
  grimoireSpells?: ObjectId[]
) => {
  let query: any = { $match: {} };

  if (grimoireSpells) {
    query["$match"]["_id"] = { $in: grimoireSpells };
    query["$match"]["school"] = { $in: filterValue };

    return query;
  } else {
    query["$match"]["school"] = { $in: filterValue };
  }

  return query;
};

export const transformFilterValues = (filters: SpellsFilter[]) => {
  return filters.map((value) => {
    return value.charAt(0) + value.slice(1).toLowerCase();
  });
};
