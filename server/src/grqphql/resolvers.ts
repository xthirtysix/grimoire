import { IResolvers } from 'apollo-server-express'
import { spells } from "../spells";

export const resolvers: IResolvers = {
  Query: {
    spells: () => {
      return spells;
    },
  },
};
