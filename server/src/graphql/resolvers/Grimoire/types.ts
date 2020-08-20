import { Spell } from "../../../lib/types";

export interface GrimoireArgs {
  id: string;
}

export interface GrimoireSpellsData {
  total: number;
  result: Spell[];
}
