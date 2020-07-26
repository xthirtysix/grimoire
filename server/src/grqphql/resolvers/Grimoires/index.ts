import { IResolvers } from "apollo-server-express";
import { Grimoire } from "../../../lib/types";

export const grimoireResolvers: IResolvers = {
  Grimoire: {
    id: (grimoire: Grimoire): string => grimoire._id.toString(),
  },
};
