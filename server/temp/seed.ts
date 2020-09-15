import { ObjectId } from "mongodb";
import { connectDatabase } from "../src/database";
import { Spell } from "../src/lib/types";

const spells: Spell[] = [
  {
    _id: new ObjectId(),
    name: "Acid Splash",
    level: "LEVEL_0",
    school: "CONJURATION",
    description:
      "<p>You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.</p>",
    castingTime: "ACTION",
    duration: {
      value: 0,
      unit: "instant",
    },
    range: {
      value: 60,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: "D6" },
    damageScale: [
      {
        level: 5,
        dice: { dice: "D6", quantity: 2 },
      },
      {
        level: 11,
        dice: { dice: "D6", quantity: 3 },
      },
      {
        level: 17,
        dice: { dice: "D6", quantity: 4 },
      },
    ],
    damageType: "ACID",
    saveRequired: "DEXTERITY",
    atHigherLevels:
      "This spells damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6) and 17th level (4d6)",
    source: "PHB",
    tags: ["DAMAGE"],
    classes: ["SORCERER", "WIZARD"],
  },
  {
    _id: new ObjectId(),
    name: "Chill Touch",
    level: "LEVEL_0",
    description:
      "<p>You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target.</p><p>If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.</p>",
    school: "NECROMANCY",
    castingTime: "ACTION",
    duration: {
      value: 1,
      unit: "round",
    },
    range: {
      value: 120,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: "D8" },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: "D8" },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: "D8" },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: "D8" },
      },
    ],
    damageType: "NECROTIC",
    attackType: "RANGED",
    atHigherLevels:
      "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    tags: ["DAMAGE"],
    classes: ["SORCERER", "WARLOCK", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Dancing Lights",
    level: "LEVEL_0",
    school: "EVOCATION",
    description:
      "<p>You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.</p><p>As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range.</p>",
    castingTime: "ACTION",
    duration: {
      value: 1,
      unit: "minute",
    },
    range: {
      value: 120,
      unit: "feet",
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: "A bit of phosphorus or wychwood, or a glowworm",
    tags: ["UTILITY"],
    classes: ["BARD", "SORCERER", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Druidcraft",
    level: "LEVEL_0",
    school: "TRANSMUTATION",
    description:
      "Whispering to the spirits of nature, you create one of the following effects within range:<ul><li>You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.</li><li>You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.</li><li>You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot cube.</li></ul>You instantly light or snuff out a candle, a torch, or a small campfire.",
    castingTime: "ACTION",
    duration: {
      value: 0,
      unit: "instant",
    },
    range: {
      value: 30,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    tags: ["CONTROL"],
    classes: ["DRUID"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Eldritch Blast",
    level: "LEVEL_0",
    description:
      "<p>A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.</p>",
    school: "EVOCATION",
    castingTime: "ACTION",
    duration: {
      value: 0,
      unit: "instant",
    },
    range: {
      value: 120,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: "D10" },
    damageScale: [
      {
        level: 5,
        dice: { dice: "D10", quantity: 2 },
      },
      {
        level: 11,
        dice: { dice: "D10", quantity: 3 },
      },
      {
        level: 17,
        dice: { dice: "D10", quantity: 4 },
      },
    ],
    damageType: "FORCE",
    attackType: "RANGED",
    atHigherLevels:
      "The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.",
    tags: ["DAMAGE"],
    classes: ["WARLOCK"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Fire Bolt",
    level: "LEVEL_0",
    description:
      "<p>You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.</p>",
    school: "EVOCATION",
    castingTime: "ACTION",
    duration: {
      value: 0,
      unit: "instant",
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
    isConcentration: false,
    isRitual: false,
    damageDice: { quantity: 1, dice: "D10" },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: "D10" },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: "D10" },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: "D10" },
      },
    ],
    damageType: "FIRE",
    attackType: "RANGED",
    atHigherLevels:
      "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
    tags: ["DAMAGE"],
    classes: ["SORCERER", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Guidance",
    level: "LEVEL_0",
    school: "DIVINATION",
    castingTime: "ACTION",
    duration: {
      value: 1,
      unit: "minute",
    },
    range: {
      value: 0,
      unit: "touch",
    },
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    isConcentration: true,
    isRitual: false,
    description:
      "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.",
    source: "PHB",
    tags: ["BUFF"],
    classes: ["CLERIC", "DRUID"],
  },
  {
    _id: new ObjectId(),
    name: "Light",
    level: "LEVEL_0",
    school: "EVOCATION",
    description:
      "<p>You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.</p><p>If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.</p>",
    castingTime: "ACTION",
    duration: {
      value: 1,
      unit: "hour",
    },
    range: {
      value: 0,
      unit: "touch",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: true,
    },
    materials: "A firefly or phosphorescent moss",
    saveRequired: "DEXTERITY",
    tags: ["CREATION", "UTILITY"],
    classes: ["BARD", "CLERIC", "SORCERER", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Mage Hand",
    level: "LEVEL_0",
    school: "CONJURATION",
    description:
      "<p>A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.You can use your action to control the hand.</p><p>You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.</p><p>The hand can't attack, activate magic items, or carry more than 10 pounds.</p>",
    castingTime: "ACTION",
    duration: {
      value: 1,
      unit: "minute",
    },
    range: {
      value: 30,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    tags: ["UTILITY"],
    classes: ["BARD", "SORCERER", "WARLOCK", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Mending",
    level: "LEVEL_0",
    school: "TRANSMUTATION",
    description:
      "<p>This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.</p><p>This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.</p>",
    castingTime: "ONE_MINUTE",
    duration: {
      value: 0,
      unit: "instant",
    },
    range: {
      value: 0,
      unit: "touch",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: "Two lodestones",
    tags: ["UTILITY"],
    classes: ["BARD", "CLERIC", "DRUID", "SORCERER", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Message",
    level: "LEVEL_0",
    school: "TRANSMUTATION",
    description:
      "<p>You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.</p><p>You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.</p>",
    castingTime: "ACTION",
    duration: {
      value: 1,
      unit: "round",
    },
    range: {
      value: 120,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: "A short piece of copper wire",
    tags: ["COMMUNICATION", "SOCIAL"],
    classes: ["BARD", "SORCERER", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Minor Illusion",
    level: "LEVEL_0",
    school: "ILLUSION",
    description:
      "<p>You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.</p><p>If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.</p><p>If you create an image of an object--such as a chair, muddy footprints, or a small chest--it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.</p><p>If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.</p>",
    castingTime: "ACTION",
    duration: {
      value: 1,
      unit: "minute",
    },
    range: {
      value: 30,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: false,
      somatic: true,
      material: true,
    },
    materials: "A bit of fleece",
    tags: ["CONTROL"],
    classes: ["BARD", "SORCERER", "WARLOCK", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Poison Spray",
    level: "LEVEL_0",
    school: "CONJURATION",
    description:
      "<p>You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.</p>",
    castingTime: "ACTION",
    duration: {
      value: 0,
      unit: "instant",
    },
    range: {
      value: 10,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: "D12" },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: "D12" },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: "D12" },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: "D12" },
      },
    ],
    damageType: "POISON",
    saveRequired: "CONSTITUTION",
    atHigherLevels:
      "This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).",
    tags: ["DAMAGE"],
    classes: ["DRUID", "SORCERER", "WARLOCK", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Prestidigitation",
    level: "LEVEL_0",
    school: "TRANSMUTATION",
    description:
      "<p>This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:</p><ul><li>You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.</li><li>You instantaneously light or snuff out a candle, a torch, or a small campfire.</li><li>You instantaneously clean or soil an object no larger than 1 cubic foot.</li><li>You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.</li><li>You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.</li><li>You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.</li></ul><p>If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.</p>",
    castingTime: "ACTION",
    duration: {
      value: 1,
      unit: "hour",
    },
    range: {
      value: 10,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    tags: ["UTILITY"],
    classes: ["BARD", "SORCERER", "WARLOCK", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Produce Flame",
    level: "LEVEL_0",
    school: "CONJURATION",
    description:
      "<p>A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.</p><p>You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage.</p>",
    castingTime: "ACTION",
    duration: {
      value: 10,
      unit: "minutes",
    },
    range: {
      value: 0,
      unit: "self",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: "D8" },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: "D8" },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: "D8" },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: "D8" },
      },
    ],
    damageType: "FIRE",
    attackType: "RANGED",
    atHigherLevels:
      "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    tags: ["CREATION", "DAMAGE"],
    classes: ["DRUID"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Ray of Frost",
    level: "LEVEL_0",
    school: "EVOCATION",
    description:
      "<p>A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.</p>",
    castingTime: "ACTION",
    duration: {
      value: 0,
      unit: "instant",
    },
    range: {
      value: 60,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: "D8" },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: "D8" },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: "D8" },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: "D8" },
      },
    ],
    damageType: "COLD",
    attackType: "RANGED",
    atHigherLevels:
      "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    tags: ["DAMAGE"],
    classes: ["SORCERER", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Resistance",
    level: "LEVEL_0",
    school: "ABJURATION",
    description:
      "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends.",
    castingTime: "ACTION",
    duration: {
      value: 1,
      unit: "minute",
    },
    range: {
      value: 0,
      unit: "touch",
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: "A miniature cloak",
    tags: ["BUFF"],
    classes: ["CLERIC", "DRUID"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Sacred Flame",
    level: "LEVEL_0",
    school: "EVOCATION",
    description:
      "<p>Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.</p>",
    castingTime: "ACTION",
    duration: {
      value: 0,
      unit: "instant",
    },
    range: {
      value: 60,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: "D8" },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: "D8" },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: "D8" },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: "D8" },
      },
    ],
    damageType: "RADIANT",
    saveRequired: "DEXTERITY",
    atHigherLevels:
      "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    tags: ["DAMAGE"],
    classes: ["CLERIC"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Shillelilagh",
    level: "LEVEL_0",
    school: "TRANSMUTATION",
    description:
      "The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.",
    castingTime: "BONUS_ACTION",
    duration: {
      value: 1,
      unit: "minute",
    },
    range: {
      value: 0,
      unit: "touch",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: "Mistletoe, a shamrock leaf, and a club or quarterstaff",
    damageType: "BLUDGEONING",
    attackType: "MELEE",
    tags: ["DAMAGE", "BUFF"],
    classes: ["DRUID"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Shocking Grasp",
    level: "LEVEL_0",
    school: "EVOCATION",
    description:
      "<p>Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.</p>",
    castingTime: "ACTION",
    duration: {
      value: 0,
      unit: "instant",
    },
    range: {
      value: 0,
      unit: "touch",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    damageDice: { quantity: 1, dice: "D8" },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: "D8" },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: "D8" },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: "D8" },
      },
    ],
    damageType: "LIGHTNING",
    attackType: "MELEE",
    atHigherLevels:
      "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    tags: ["DAMAGE"],
    classes: ["SORCERER", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Spare the Dying",
    level: "LEVEL_0",
    school: "NECROMANCY",
    description:
      "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.",
    castingTime: "ACTION",
    duration: {
      value: 0,
      unit: "instant",
    },
    range: {
      value: 0,
      unit: "touch",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    tags: ["HEALING"],
    classes: ["CLERIC"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Thaumaturgy",
    level: "LEVEL_0",
    school: "TRANSMUTATION",
    description:
      "<p>You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:</p><ul><li>Your voice booms up to three times as loud as normal for 1 minute.</li><li>You cause flames to flicker, brighten, dim, or change color for 1 minute.</li><li>You cause harmless tremors in the ground for 1 minute.</li><li>You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.</li><li>You instantaneously cause an unlocked door or window to fly open or slam shut.</li><li>You alter the appearance of your eyes for 1 minute.</li></ul><p>If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.</p>",
    castingTime: "ACTION",
    duration: {
      value: 1,
      unit: "minute",
    },
    range: {
      value: 30,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    tags: ["CONTROL"],
    classes: ["CLERIC"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "True Strike",
    level: "LEVEL_0",
    school: "DIVINATION",
    description:
      "<p>You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended.</p>",
    castingTime: "ACTION",
    duration: {
      value: 1,
      unit: "round",
    },
    range: {
      value: 30,
      unit: "feet",
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: false,
      somatic: true,
      material: false,
    },
    tags: ["FOREKNOWLEDGE"],
    classes: ["BARD", "SORCERER", "WARLOCK", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Vicious Mockery",
    level: "LEVEL_0",
    school: "ENCHANTMENT",
    description:
      "<p>You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.</p><p>This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).</p>",
    castingTime: "ACTION",
    duration: {
      value: 0,
      unit: "instant",
    },
    range: {
      value: 60,
      unit: "feet",
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: false,
      material: false,
    },
    damageDice: { quantity: 1, dice: "D4" },
    damageScale: [
      {
        level: 5,
        dice: { quantity: 2, dice: "D4" },
      },
      {
        level: 11,
        dice: { quantity: 3, dice: "D4" },
      },
      {
        level: 17,
        dice: { quantity: 4, dice: "D4" },
      },
    ],
    damageType: "PSYCHIC",
    saveRequired: "WISDOM",
    tags: ["DAMAGE", "DEBUFF"],
    classes: ["BARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Alarm",
    level: "LEVEL_1",
    school: "ABJURATION",
    description:
      "<p>You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.</p><p>A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.</p><p>An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.</p>",
    castingTime: "ONE_MINUTE",
    duration: {
      value: 8,
      unit: "hours",
    },
    range: {
      value: 30,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: true,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: "A tiny bell and a piece of fine silver wire",
    tags: ["DETECTION"],
    classes: ["RANGER", "WIZARD"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Animal Friendship",
    level: "LEVEL_1",
    school: "ENCHANTMENT",
    description:
      "<p>This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast's Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell's duration. If you or one of your companions harms the target, the spells ends.</p>",
    castingTime: "ACTION",
    duration: {
      value: 24,
      unit: "hours",
    },
    range: {
      value: 30,
      unit: "feet",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: "A morsel of food",
    atHigherSlots:
      "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast t level above 1st.",
    saveRequired: "WISDOM",
    tags: ["CONTROL", "SOCIAL"],
    classes: ["BARD", "DRUID", "RANGER"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Bane",
    level: "LEVEL_1",
    school: "ENCHANTMENT",
    description:
      "<p>Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.</p>",
    castingTime: "ACTION",
    duration: {
      value: 1,
      unit: "minute",
    },
    range: {
      value: 30,
      unit: "feet",
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: "A drop of blood",
    saveRequired: "CHARISMA",
    atHigherLevels:
      "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
    tags: ["DEBUFF"],
    classes: ["BARD", "CLERIC"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Bless",
    level: "LEVEL_1",
    school: "ENCHANTMENT",
    description:
      "<p>You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.</p>",
    castingTime: "ACTION",
    duration: {
      value: 1,
      unit: "minute",
    },
    range: {
      value: 30,
      unit: "feet",
    },
    isConcentration: true,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: true,
    },
    materials: "A sprinkling of holy water",
    atHigherSlots:
      "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
    tags: ["BUFF"],
    classes: ["CLERIC", "PALADIN"],
    source: "PHB",
  },
  {
    _id: new ObjectId(),
    name: "Burning Hands",
    level: "LEVEL_1",
    school: "EVOCATION",
    description:
      "<p>As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.</p><p>The fire ignites any flammable objects in the area that aren't being worn or carried.</p>",
    castingTime: "ACTION",
    range: {
      value: 0,
      unit: "self",
    },
    isConcentration: false,
    isRitual: false,
    components: {
      verbal: true,
      somatic: true,
      material: false,
    },
    duration: {
      value: 0,
      unit: "instant",
    },
    damageDice: { quantity: 3, dice: "D6" },
    damageType: "FIRE",
    atHigherSlots:
      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
    tags: ["BUFF"],
    classes: ["CLERIC", "PALADIN"],
    source: "PHB",
  },
];

const seed = async () => {
  try {
    console.log("🕑[seed]: running...");

    const db = await connectDatabase();

    for (const spell of spells) {
      await db.spells.insertOne(spell);
    }

    console.log("✔️ [seed]: success! Press Ctrl+C to finish.");
  } catch {
    throw new Error("failed to seed database");
  }
};

seed();
