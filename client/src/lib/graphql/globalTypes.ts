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

export enum SpellsFilter {
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
