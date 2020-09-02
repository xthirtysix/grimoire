import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";
import { Request } from "express";
import { Spell, Database } from "../../../lib/types";
import { authorize } from "../../../lib/utils";
import { SpellArgs, SpellsArgs, SpellsData, SpellsFilter } from "./types";

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

        if (grimoire) {
          const grimoireDoc = await db.grimoires.findOne({_id: new ObjectId(grimoire)});

          cursor = await db.spells.find({_id: {$in: grimoireDoc?.spells}})
          data.total = await cursor.count();
        }

        if (filter && filter === SpellsFilter.LEVEL_LOW_TO_HIGH) {
          cursor = cursor.sort({ level: 1 });
        }

        if (filter && filter === SpellsFilter.LEVEL_HIGH_TO_LOW) {
          cursor = cursor.sort({ level: -1 });
        }

        if (filter && filter === SpellsFilter.ABJURATION) {
          cursor = await db.spells.find({ school: "Abjuration" });
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
