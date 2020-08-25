import { Spell  } from "../../../lib/types";

export interface SpellArgs {
  name: string;
}

export enum SpellsFilter {
  LEVEL_LOW_TO_HIGH = "LEVEL_LOW_TO_HIGH",
  LEVEL_HIGH_TO_LOW = "LEVEL_HIGH_TO_LOW",
  ABJURATION = "ABJURATION",
  CONJURATION = 'CONJURATION',
  DIVINATION = 'DIVINATION',
  ENCHANTMENT = 'ENCHANTMENT',
  EVOCATION = 'EVOCATION',
  ILLUSION = 'ILLUSION',
  NECROMANCY = 'NECROMANCY',
  TRANSMUTATION = 'TRANSMUTATION'
}

export interface SpellsArgs {
  filter: SpellsFilter;
  limit?: number;
}

export interface SpellsData {
  total: number;
  result: Spell[];
}
