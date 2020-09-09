import { Spell } from "../../../lib/types";

export interface SpellArgs {
  name: string;
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
  REACTION = "REACTION",
  BONUS_ACTION = "1_BONUS_ACTION",
  ACTION = "1_ACTION",
  ONE_MINUTE = "1_MINUTE",
  TEN_MINUTES = "10_MINUTES",
  ONE_HOUR = "1_HOUR",
  EIGHT_HOURS = "8_HOURS",
  TWELVE_HOURS = "12_HOURS",
  TWENTYFOUR_HOURS = "24_HOURS",
  SPECIAL = "SPECIAL",
}

export enum SpellsSort {
  CASTING_TIME_ASCENDING = "CASTING_TIME_ASCENDING",
  CASTING_TIME_DESCENDING = "CASTING_TIME_DESCENDING",
  NAME_ASCENDING = "NAME_ASCENDING",
  NAME_DESCENDING = "NAME_DESCENDING",
}

export interface SpellsArgs {
  grimoireID?: string;
  filters?: SpellsFilter[];
  sort?: SpellsSort;
  limit?: number;
}

export interface SpellsData {
  total: number;
  result: Spell[];
}
