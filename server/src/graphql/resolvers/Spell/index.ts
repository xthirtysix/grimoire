import {IResolvers} from "apollo-server-express";
import {ObjectId} from "mongodb";
import {Request} from "express";
import {Spell, Database} from "../../../lib/types";
import {
  authorize,
  createFilterQuery,
  orderCastingTimeQuery,
} from "../../../lib/utils";
import {SpellArgs, SpellsArgs, SpellsData, SpellsSort} from "./types";

export const spellResolvers: IResolvers = {
  Query: {
    spell: async (
      _root: undefined,
      {name}: SpellArgs,
      {db, req}: { db: Database; req: Request }
    ): Promise<Spell> => {
      try {
        const spell = await db.spells.findOne({name});
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
      {grimoireID, filters, sort, limit}: SpellsArgs,
      {db}: { db: Database }
    ): Promise<SpellsData> => {
      try {
        const data: SpellsData = {
          total: 0,
          result: [],
        };

        let cursor;
        let projectQuery: Object;
        let sortQuery: Object;

        switch (sort) {
          case SpellsSort.NAME_DESCENDING:
            sortQuery = {$sort: {name: -1}};
            break;
          case SpellsSort.CASTING_TIME_ASCENDING:
            projectQuery = orderCastingTimeQuery;
            sortQuery = {$sort: {order: 1}};
            break;
          case SpellsSort.CASTING_TIME_DESCENDING:
            projectQuery = orderCastingTimeQuery;
            sortQuery = {$sort: {order: -1}};
            break;
          case SpellsSort.LEVEL_ASCENDING:
            sortQuery = {$sort: {level: 1}};
            break;
          case SpellsSort.LEVEL_DESCENDING:
            sortQuery = {$sort: {level: -1}};
            break;
          default:
            sortQuery = {$sort: {name: 1}};
        }

        const formAggregationQuery = (spells?: ObjectId[]) => {
          const aggregation: Object[] = [sortQuery];

          if (filters) {
            aggregation.unshift(createFilterQuery(filters));
          }

          if (spells) {
            let query = {$match: {_id: {$in: spells}}};
            aggregation.unshift(query);
          }

          if (projectQuery) {
            aggregation.unshift(projectQuery);
          }

          return aggregation;
        };

        cursor = db.spells.aggregate(formAggregationQuery());

        if (limit) {
          cursor = db.spells.aggregate([
            {$sample: {size: limit}},
            sortQuery,
          ]);
          data.total = limit;
        }

        if (grimoireID) {
          const grimoire = await db.grimoires.findOne({
            _id: new ObjectId(grimoireID),
          });

          if (!grimoire) {
            throw new Error(`unable to find grimoire width id: ${grimoireID}`);
          }

          cursor = db.spells.aggregate(
            formAggregationQuery(grimoire.spells)
          );
        }

        data.result = await cursor.toArray();
        data.total = data.result.length;

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
