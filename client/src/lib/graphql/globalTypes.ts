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

export enum SpellsFilter {
  ABJURATION = "ABJURATION",
  ACTION = "ACTION",
  BONUS_ACTION = "BONUS_ACTION",
  CONJURATION = "CONJURATION",
  DIVINATION = "DIVINATION",
  EIGHT_HOURS = "EIGHT_HOURS",
  ENCHANTMENT = "ENCHANTMENT",
  EVOCATION = "EVOCATION",
  ILLUSION = "ILLUSION",
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
  NECROMANCY = "NECROMANCY",
  ONE_HOUR = "ONE_HOUR",
  ONE_MINUTE = "ONE_MINUTE",
  REACTION = "REACTION",
  SPECIAL = "SPECIAL",
  TEN_MINUTES = "TEN_MINUTES",
  TRANSMUTATION = "TRANSMUTATION",
  TWELVE_HOURS = "TWELVE_HOURS",
  TWENTYFOUR_HOURS = "TWENTYFOUR_HOURS",
}

export enum SpellsSort {
  CASTING_TIME_ASCENDING = "CASTING_TIME_ASCENDING",
  CASTING_TIME_DESCENDING = "CASTING_TIME_DESCENDING",
  LEVEL_ASCENDING = "LEVEL_ASCENDING",
  LEVEL_DESCENDING = "LEVEL_DESCENDING",
  NAME_ASCENDING = "NAME_ASCENDING",
  NAME_DESCENDING = "NAME_DESCENDING",
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

//==============================================================
// END Enums and Input Objects
//==============================================================
