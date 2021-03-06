/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum CastingTime {
  ACTION = "ACTION",
  BONUS_ACTION = "BONUS_ACTION",
  EIGHT_HOURS = "EIGHT_HOURS",
  ONE_HOUR = "ONE_HOUR",
  ONE_MINUTE = "ONE_MINUTE",
  REACTION = "REACTION",
  SPECIAL = "SPECIAL",
  TEN_MINUTES = "TEN_MINUTES",
  TWELVE_HOURS = "TWELVE_HOURS",
  TWENTYFOUR_HOURS = "TWENTYFOUR_HOURS",
}

export enum ClassType {
  BARBARIAN = "BARBARIAN",
  BARD = "BARD",
  CLERIC = "CLERIC",
  DRUID = "DRUID",
  FIGHTER = "FIGHTER",
  MONK = "MONK",
  PALADIN = "PALADIN",
  RANGER = "RANGER",
  ROGUE = "ROGUE",
  SORCERER = "SORCERER",
  WARLOCK = "WARLOCK",
  WIZARD = "WIZARD",
}

export enum Conditions {
  BLINDED = "BLINDED",
  CHARMED = "CHARMED",
  DEAFEND = "DEAFEND",
  EXHAUSTION = "EXHAUSTION",
  FRIGHTENED = "FRIGHTENED",
  GRAPPLED = "GRAPPLED",
  INCAPACITATED = "INCAPACITATED",
  INVISIBLE = "INVISIBLE",
  PARALYZED = "PARALYZED",
  PETRIFIED = "PETRIFIED",
  POISONED = "POISONED",
  PRONE = "PRONE",
  RESTRAINED = "RESTRAINED",
  STUNNED = "STUNNED",
  UNCONSCIOUS = "UNCONSCIOUS",
}

export enum DamageType {
  ACID = "ACID",
  BLUDGEONING = "BLUDGEONING",
  COLD = "COLD",
  FIRE = "FIRE",
  FORCE = "FORCE",
  LIGHTNING = "LIGHTNING",
  LONGBOW = "LONGBOW",
  MELEE_WEAPON = "MELEE_WEAPON",
  NATURAL = "NATURAL",
  NECROTIC = "NECROTIC",
  ONE_HANDED_MELEE = "ONE_HANDED_MELEE",
  PIERCING = "PIERCING",
  POISON = "POISON",
  PSYCHIC = "PSYCHIC",
  RADIANT = "RADIANT",
  SHORTBOW = "SHORTBOW",
  SLASHING = "SLASHING",
  THUNDER = "THUNDER",
  UNARMED = "UNARMED",
}

export enum DiceType {
  D10 = "D10",
  D100 = "D100",
  D12 = "D12",
  D20 = "D20",
  D4 = "D4",
  D6 = "D6",
  D8 = "D8",
}

export enum Duration {
  EIGHT_HOURS = "EIGHT_HOURS",
  INSTANTANEOUS = "INSTANTANEOUS",
  ONE_DAY = "ONE_DAY",
  ONE_HOUR = "ONE_HOUR",
  ONE_MINUTE = "ONE_MINUTE",
  ONE_ROUND = "ONE_ROUND",
  SEVEN_DAYS = "SEVEN_DAYS",
  SIX_ROUNDS = "SIX_ROUNDS",
  SPECIAL = "SPECIAL",
  TEN_DAYS = "TEN_DAYS",
  TEN_MINUTES = "TEN_MINUTES",
  THIRTY_DAYS = "THIRTY_DAYS",
  TWENTYFOUR_HOURS = "TWENTYFOUR_HOURS",
  TWO_HOURS = "TWO_HOURS",
  UNTIL_DISPELLED = "UNTIL_DISPELLED",
  UNTIL_DISPELLED_OR_TRIGGERED = "UNTIL_DISPELLED_OR_TRIGGERED",
}

export enum Level {
  LEVEL_0 = "LEVEL_0",
  LEVEL_1 = "LEVEL_1",
  LEVEL_2 = "LEVEL_2",
  LEVEL_3 = "LEVEL_3",
  LEVEL_4 = "LEVEL_4",
  LEVEL_5 = "LEVEL_5",
  LEVEL_6 = "LEVEL_6",
  LEVEL_7 = "LEVEL_7",
  LEVEL_8 = "LEVEL_8",
  LEVEL_9 = "LEVEL_9",
}

export enum SpellTag {
  BANISHMENT = "BANISHMENT",
  BUFF = "BUFF",
  CHARMED = "CHARMED",
  COMBAT = "COMBAT",
  COMMUNICATION = "COMMUNICATION",
  COMPULTION = "COMPULTION",
  CONTROL = "CONTROL",
  CREATION = "CREATION",
  DAMAGE = "DAMAGE",
  DEBUFF = "DEBUFF",
  DECEPTION = "DECEPTION",
  DETECTION = "DETECTION",
  DUNAMANCY = "DUNAMANCY",
  ENVIRONMENT = "ENVIRONMENT",
  EXPLORATION = "EXPLORATION",
  FOREKNOWLEDGE = "FOREKNOWLEDGE",
  HEALING = "HEALING",
  MOVEMENT = "MOVEMENT",
  NEGATION = "NEGATION",
  PSIONIC = "PSIONIC",
  SCRYING = "SCRYING",
  SHAPECHANGING = "SHAPECHANGING",
  SOCIAL = "SOCIAL",
  SUMMONING = "SUMMONING",
  TELEPORTATION = "TELEPORTATION",
  UTILITY = "UTILITY",
  WARDING = "WARDING",
}

export enum SpellsSchool {
  ABJURATION = "ABJURATION",
  CONJURATION = "CONJURATION",
  DIVINATION = "DIVINATION",
  ENCHANTMENT = "ENCHANTMENT",
  EVOCATION = "EVOCATION",
  ILLUSION = "ILLUSION",
  NECROMANCY = "NECROMANCY",
  TRANSMUTATION = "TRANSMUTATION",
}

export enum SpellsSort {
  CASTING_TIME_ASCENDING = "CASTING_TIME_ASCENDING",
  CASTING_TIME_DESCENDING = "CASTING_TIME_DESCENDING",
  LEVEL_ASCENDING = "LEVEL_ASCENDING",
  LEVEL_DESCENDING = "LEVEL_DESCENDING",
  NAME_ASCENDING = "NAME_ASCENDING",
  NAME_DESCENDING = "NAME_DESCENDING",
}

export enum Stat {
  CHARISMA = "CHARISMA",
  CONSTITUTION = "CONSTITUTION",
  DEXTERITY = "DEXTERITY",
  INTELLIGENCE = "INTELLIGENCE",
  STRENGTH = "STRENGTH",
  WISDOM = "WISDOM",
}

export interface CharacterClassesInput {
  class?: string | null;
  level?: number | null;
}

export interface CreateGrimoireInput {
  name: string;
  characterClasses: (CharacterClassesInput | null)[];
}

export interface LogInInput {
  code: string;
}

export interface SpellsFilter {
  school?: SpellsSchool[] | null;
  castingTime?: CastingTime[] | null;
  level?: Level[] | null;
  classes?: ClassType[] | null;
  saveRequired?: Stat[] | null;
  tags?: SpellTag[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
