require("dotenv").config();

import {ObjectID} from 'mongodb'
import { connectDatabase } from "../src/database";
import { Spell } from '../src/lib/types';

const seed = async () => {
  try {
    console.log("🕑[seed]: running...");

    const db = await connectDatabase();
    const spells: Spell[] = [
      {
        _id: new ObjectID(),
        name: "Acid Splash",
        level: 0,
        description:
          "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spells damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6) and 17th level (4d6).",
        school: "Conjuration",
        castingTime: {
          value: 1,
          unit: "action",
        },
        range: {
          value: 60,
          unit: "feet",
        },
        components: {
          verbal: true,
          somatic: true,
          material: false,
        },
        duration: {
          value: 0,
          unit: "instant",
        },
        damage: {
          type: "acid",
          isScaleLevel: true,
          isScaleSlot: false,
          basic: "1d6",
          level5: "2d6",
          level11: "3d6",
          level17: "4d6",

        },
        source: "PHB",
      },
      {
        _id: new ObjectID(),
        name: "Chill Touch",
        level: 0,
        description:
          "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
        school: "Necromancy",
        castingTime: {
          value: 1,
          unit: "action",
        },
        range: {
          value: 120,
          unit: "feet",
        },
        components: {
          verbal: true,
          somatic: true,
          material: false,
        },
        duration: {
          value: 1,
          unit: "round",
        },
        damage: {
          basic: "1d8",
          type: "necrotic",
          isScaleLevel: true,
          isScaleSlot: false,
          level5: "2d8",
          level11: "3d8",
          level17: "4d8",
        },
        source: "PHB",
      },
    ];

    for (const spell of spells) {
      await db.spells.insertOne(spell);
    }

    console.log('✔️ [seed]: success! Press Ctrl+C to finish.')
  } catch {
    throw new Error("failed to seed database");
  }
};

seed();
