import { connectDatabase } from "../src/database";

const erasedb = async () => {
  try {
    console.log("🕑[erase]: in progress...");

    const db = await connectDatabase();

    const spells = await db.spells.find({}).toArray();
    const users = await db.users.find({}).toArray();

    if (spells.length > 0) {
      await db.spells.drop();
    } 

    if (users.length > 0) {
      await db.users.drop();
    }

    console.log("✔️ [erase]: DB cleared! Press Ctrl+C to finish.");
  } catch {
    throw new Error("failed to erase database");
  }
};

erasedb();
