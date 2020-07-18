import { IResolvers } from 'apollo-server-express'
import { Database, Spell } from '../lib/types';

export const resolvers: IResolvers = {
  Query: {
    spells: async (_root: undefined, _args: {}, { db }: { db: Database}): Promise<Spell[]> => {
      return await db.spells.find({}).toArray();
    },
  },
};