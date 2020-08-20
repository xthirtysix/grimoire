import { Spell  } from "../../../lib/types";

export interface SpellArgs {
  id: string;
}

export enum SpellsFilter {
  LEVEL_LOW_TO_HIGH = "LEVEL_LOW_TO_HIGH",
  LEVEL_HIGH_TO_LOW = "LEVEL_HIGH_TO_LOW",
}

export interface SpellsArgs {
  filter: SpellsFilter;
  limit?: number;
}

export interface SpellsData {
  total: number;
  result: Spell[];
}
