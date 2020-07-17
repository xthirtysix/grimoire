import { connectDatabase } from "../src/database";

const erasedb = async () => {
  try {
    console.log("🕑[erase]: in progress...");

    const db = await connectDatabase();

    await db.spells.remove({});

    console.log('✔️ [erase]: DB cleared! Press Ctrl+C to finish.')
  } catch {
    throw new Error("failed to erase database");
  }
};

erasedb();
