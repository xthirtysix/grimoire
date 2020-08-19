import merge from "lodash.merge";
import { viewerResolvers } from "./Viewer";
import { spellResolvers } from "./Spell";
import { grimoireResolvers } from "./Grimoire";
import { userResolvers } from "./User";

export const resolvers = merge(
  viewerResolvers,
  spellResolvers,
  grimoireResolvers,
  userResolvers
);
