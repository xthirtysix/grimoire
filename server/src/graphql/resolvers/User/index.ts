import { IResolvers } from "apollo-server-express";
import { Request } from "express";
import { User, Database } from "../../../lib/types";
import { authorize } from "../../../lib/utils";
import { UserArgs, UserGrimoiresData } from "./types";

export const userResolvers: IResolvers = {
  Query: {
    user: async (
      _root: undefined,
      { id }: UserArgs,
      { db, req }: { db: Database; req: Request }
    ): Promise<User> => {
      try {
        const user = await db.users.findOne({ _id: id });

        if (!user) {
          throw new Error(`user with ${id} can not be found`);
        }

        const viewer = await authorize(db, req);

        if (viewer && viewer._id === user._id) {
          user.authorized = true;
        }

        return user;
      } catch (error) {
        throw new Error(`Failed to query user: ${error}`);
      }
    },
  },
  User: {
    id: (user: User): string => {
      return user._id;
    },
    grimoires: async (
      user: User,
      _args: undefined,
      { db }: { db: Database }
    ): Promise<UserGrimoiresData> => {
      try {
        const data: UserGrimoiresData = {
          total: 0,
          result: [],
        };

        const cursor = db.grimoires.find({
          _id: { $in: user.grimoires},
        });

        data.total = await cursor.count();
        data.result = await cursor.toArray();

        return data;
      } catch (error) {
        throw new Error(`Failed to query grimoire spells: ${error}`);
      }}
  },
};
