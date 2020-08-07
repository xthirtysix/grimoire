import { IResolvers } from "apollo-server-express";
import { Request } from "express";
import { Grimoire, User, Database } from "../../../lib/types";
import { authorize } from "../../../lib/utils";
import { GrimoireArgs } from "./types";
import { GrimoireSpellsData } from "../Grimoire/types";
import { ObjectId } from "mongodb";

export const grimoireResolvers: IResolvers = {
  Query: {
    grimoire: async (
      _root: undefined,
      { id }: GrimoireArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<Grimoire> => {
      try {
        const grimoire = await db.grimoires.findOne({ _id: new ObjectId(id) });

        if (!grimoire) {
          throw new Error(`grimoire with ${id} can not be found`);
        }

        const viewer = await authorize(db, req);

        if (viewer && viewer._id === grimoire.owner) {
          grimoire.authorized = true;
        }

        return grimoire;
      } catch (error) {
        throw new Error(`Failed to query user: ${error}`);
      }
    },
  },
  Grimoire: {
    id: (grimoire: Grimoire): string => {
      return grimoire._id.toString();
    },
    owner: async (
      grimoire: Grimoire,
      _args: {},
      { db }: { db: Database }
    ): Promise<User> => {
      const owner = await db.users.findOne({
        _id: grimoire.owner,
      });

      if (!owner) {
        throw new Error("Owner can not be found");
      }

      return owner;
    },
    spells: async (
      grimoire: Grimoire,
      _args: {},
      { db }: { db: Database }
    ): Promise<GrimoireSpellsData | null> => {
      try {
        if (!grimoire.spells) {
          return null;
        }

        const data: GrimoireSpellsData = {
          total: 0,
          result: [],
        };

        const cursor = await db.spells.find({
          _id: { $in: grimoire.spells },
        });

        data.total = await cursor.count();
        data.result = await cursor.toArray();

        return data;
      } catch (error) {
        throw new Error(`Failed to query grimoire spells: ${error}`);
      }
    },
  },
};
