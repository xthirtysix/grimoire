require("dotenv").config();

import { MongoClient } from "mongodb";
import { Spell, User, Grimoire, Database } from "../lib/types";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("main");

  return {
    spells: db.collection<Spell>("spells"),
    users: db.collection<User>("users"),
    grimoires: db.collection<Grimoire>("grimoires"),
  };
};
