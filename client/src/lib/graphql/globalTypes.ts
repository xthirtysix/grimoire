/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

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
  LEVEL_HIGH_TO_LOW = "LEVEL_HIGH_TO_LOW",
  LEVEL_LOW_TO_HIGH = "LEVEL_LOW_TO_HIGH",
  NECROMANCY = "NECROMANCY",
  TRANSMUTATION = "TRANSMUTATION",
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
