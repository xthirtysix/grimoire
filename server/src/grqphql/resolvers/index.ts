import merge from "lodash.merge";
import { viewerResolvers } from "./Viewer";
import { spellResolvers } from "./Spells";
import { userResolvers } from "./User";

export const resolvers = merge(viewerResolvers, spellResolvers, userResolvers);
