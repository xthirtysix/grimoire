import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";
import { Request } from "express";
import { Spell, Database } from "../../../lib/types";
import { authorize } from "../../../lib/utils";
import { SpellArgs, SpellsArgs, SpellsData, SpellsFilter } from "./types";

const handleFilterQueery = async (
  filterField: string,
  filterValue: string,
  grimoireSpells?: ObjectId[]
) => {
  let query: any = {};

  if (grimoireSpells) {
    query = { $match: {} };
    query["$match"]["_id"] = { $in: grimoireSpells };
    query["$match"][filterField] = filterValue;

    return query;
  }

  query[filterField] = filterValue;
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
      { filter, grimoire, limit }: SpellsArgs,
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

        const grimoireDoc = grimoire
          ? await db.grimoires.findOne({
              _id: new ObjectId(grimoire),
            })
          : null;
        const spells = grimoire ? grimoireDoc?.spells : null;

        if (grimoire) {
          cursor = await db.spells.find({ _id: { $in: grimoireDoc?.spells } });
          data.total = await cursor.count();
        }

        if (filter && filter === SpellsFilter.NAME_ASCENDING) {
          cursor = cursor.sort({ name: 1 });
        }

        if (filter && filter === SpellsFilter.NAME_DESCENDING) {
          cursor = cursor.sort({ name: -1 });
        }

        if (filter && filter === SpellsFilter.ABJURATION) {
          cursor = grimoireDoc
            ? await db.spells.aggregate([
                await handleFilterQueery("school", "Abjuration", grimoireDoc.spells),
              ])
            : await db.spells.find(handleFilterQueery("school", "Abjuration"));
          if (grimoireDoc) {
            console.log(
              handleFilterQueery("school", "Abjuration", grimoireDoc?.spells)
            );
          }
        }

        if (filter && filter === SpellsFilter.DIVINATION) {
          cursor = await db.spells.find({ school: "Divination" });
        }

        if (filter && filter === SpellsFilter.CONJURATION) {
          cursor = await db.spells.find({ school: "Conjuration" });
        }

        if (filter && filter === SpellsFilter.ENCHANTMENT) {
          cursor = await db.spells.find({ school: "Enchantment" });
        }

        if (filter && filter === SpellsFilter.EVOCATION) {
          cursor = await db.spells.find({ school: "Evocation" });
        }

        if (filter && filter === SpellsFilter.ILLUSION) {
          cursor = await db.spells.find({ school: "Illusion" });
        }

        if (filter && filter === SpellsFilter.NECROMANCY) {
          cursor = await db.spells.find({ school: "Necromancy" });
        }

        if (filter && filter === SpellsFilter.TRANSMUTATION) {
          cursor = await db.spells.find({ school: "Transmutation" });
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
