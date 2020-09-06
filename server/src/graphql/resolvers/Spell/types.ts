import { Spell } from "../../../lib/types";

export interface SpellArgs {
  name: string;
}

export enum SpellsFilter {
  NAME_ASCENDING = "NAME_ASCENDING",
  NAME_DESCENDING = "NAME_DESCENDING",
  ABJURATION = "ABJURATION",
  CONJURATION = "CONJURATION",
  DIVINATION = "DIVINATION",
  ENCHANTMENT = "ENCHANTMENT",
  EVOCATION = "EVOCATION",
  ILLUSION = "ILLUSION",
  NECROMANCY = "NECROMANCY",
  TRANSMUTATION = "TRANSMUTATION",
}

export interface SpellsArgs {
  filter?: SpellsFilter;
  grimoire?: string;
  limit?: number;
}

export interface SpellsData {
  total: number;
  result: Spell[];
}
