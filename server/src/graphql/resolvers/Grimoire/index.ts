import { IResolvers } from "apollo-server-express";
import { Request } from "express";
import {
  Grimoire,
  User,
  Database,
} from "../../../lib/types";
import { authorize } from "../../../lib/utils";
import { GrimoireArgs, CreateGrimoireInput } from "./types";
import { CreateGrimoireArgs } from "../Grimoire/types";
import { ObjectId } from "mongodb";
import { SpellsData } from "../Spell/types";

const verifyCreateGrimoireInput = ({
  name,
  characterClasses,
}: CreateGrimoireInput) => {
  if (!name) {
    throw new Error("name must contain letters, numbers or symbols");
  }

  if (name.length > 20) {
    throw new Error("name must be under 20 characters");
  }

  if (characterClasses.length === 0) {
    throw new Error("grimoire owner should have at least 1 class");
  }

  if (!(characterClasses.length % 2)) {
    throw new Error("grimoire owner should have at least 1 level in each class")
  }
};

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
  Mutation: {
    createGrimoire: async (
      _root: undefined,
      { input }: CreateGrimoireArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<Grimoire> => {
      verifyCreateGrimoireInput(input);

      let viewer = await authorize(db, req);

      if (!viewer) {
        throw new Error("viewer can not be found");
      }

      const insertResult = await db.grimoires.insertOne({
        _id: new ObjectId(),
        ...input,
        spells: [],
        owner: viewer._id,
      });

      const insertedGrimoire: Grimoire = insertResult.ops[0];

      await db.users.updateOne(
        { _id: viewer._id },
        { $push: { grimoires: insertedGrimoire._id } }
      );

      return insertedGrimoire;
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
    ): Promise<SpellsData | null> => {
      try {
        if (!grimoire.spells) {
          return null;
        }

        const data: SpellsData = {
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
