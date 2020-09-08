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
}

export enum SpellsSort {
  CASTING_TIME_ASCENDING = "CASTING_TIME_ASCENDING",
  CASTING_TIME_DESCENDING = "CASTING_TIME_DESCENDING",
  NAME_ASCENDING = "NAME_ASCENDING",
  NAME_DESCENDING = "NAME_DESCENDING",
}

export interface SpellsArgs {
  grimoireID?: string;
  filter?: SpellsFilter[];
  sort?: SpellsSort;
  limit?: number;
}

export interface SpellsData {
  total: number;
  result: Spell[];
}
