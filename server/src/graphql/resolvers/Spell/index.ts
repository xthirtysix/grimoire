import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";
import { Request } from "express";
import { Spell, Database } from "../../../lib/types";
import { authorize } from "../../../lib/utils";
import {
  SpellArgs,
  SpellsArgs,
  SpellsData,
  SpellsFilter,
  SpellsSort,
} from "./types";

const handleFilterQuery = async (
  filterValue: string[],
  grimoireSpells?: ObjectId[]
) => {
  let query: any = {};

  if (grimoireSpells) {
    query = { $match: {} };
    query["$match"]["_id"] = { $in: grimoireSpells };
    query["$match"]["school"] = { $in: filterValue };

    return query;
  }

  query["school"] = { $in: filterValue };
  return query;
};

export const spellResolvers: IResolvers = {
  Query: {
    spell: async (
      _root: undefined,
      { name }: SpellArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<Spell> => {
      try {
        const spell = await db.spells.findOne({ name });
        if (!spell) {
          throw new Error("spell can't be found");
        }

        const viewer = await authorize(db, req);
        if (viewer && viewer._id) {
          spell.authorized = true;
        }

        return spell;
      } catch (error) {
        throw new Error(`Failed to query listing: ${error}`);
      }
    },
    spells: async (
      _root: undefined,
      { grimoireID, filter, sort, limit }: SpellsArgs,
      { db }: { db: Database }
    ): Promise<SpellsData> => {
      try {
        const data: SpellsData = {
          total: 0,
          result: [],
        };

        let cursor;

        if (limit) {
          cursor = await db.spells.aggregate([{ $sample: { size: limit } }]);
          data.total = limit;
        } else {
          cursor = await db.spells.find({});
          data.total = await cursor.count();
        }

        const grimoire = grimoireID
          ? await db.grimoires.findOne({
              _id: new ObjectId(grimoireID),
            })
          : null;

        if (grimoireID && !grimoire) {
          throw new Error(`unable to find grimoire width id: ${grimoireID}`);
        }

        if (grimoireID && grimoire) {
          cursor = await db.spells.find({ _id: { $in: grimoire.spells } });
          data.total = await cursor.count();
        }

        if (filter && filter.length) {
          const transformedFilterValues = filter.map((value) => {
            return value.charAt(0) + value.slice(1).toLowerCase();
          });

          let sortQuery;
          if (sort && sort === SpellsSort.NAME_ASCENDING) {
            sortQuery = { $sort: { name: 1 } };
          }

          if (sort && sort === SpellsSort.NAME_DESCENDING) {
            sortQuery = { $sort: { name: -1 } };
          }

          cursor = grimoire
            ? await db.spells.aggregate([
                await handleFilterQuery(
                  transformedFilterValues,
                  grimoire.spells
                ),
                sortQuery !== undefined ? sortQuery : null,
              ])
            : await db.spells.find(
                await handleFilterQuery(transformedFilterValues)
              );

          if (!grimoire && sort && sort === SpellsSort.NAME_ASCENDING) {
            cursor = cursor.sort({ name: 1 });
          }
          if (!grimoire && sort && sort === SpellsSort.NAME_DESCENDING) {
            cursor = cursor.sort({ name: -1 });
          }
        }

        if (sort && sort === SpellsSort.NAME_ASCENDING) {
          cursor = cursor.sort({ name: 1 });
        }

        if (sort && sort === SpellsSort.NAME_DESCENDING) {
          cursor = cursor.sort({ name: -1 });
        }

        data.result = await cursor.toArray();

        return data;
      } catch (error) {
        throw new Error(`Failed to query Spells: ${error}`);
      }
    },
  },
  Spell: {
    id: (spell: Spell) => {
      return spell._id.toString();
    },
  },
};
