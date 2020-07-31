import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";
import { Request } from "express";
import { Spell, Database } from "../../../lib/types";
import { authorize } from "../../../lib/utils";
import { SpellArgs } from "./types";

export const spellResolvers: IResolvers = {
  Query: {
    spell: async (
      _root: undefined,
      { id }: SpellArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<Spell> => {
      try {
        const spell = await db.spells.findOne({ _id: new ObjectId(id) });
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
  },
  Spell: {
    id: (spell: Spell) => {
      return spell._id.toString();
    },
  },
};
