import { Spell  } from "../../../lib/types";

export interface GrimoireArgs {
  id: string;
}

export interface CharacterClassesInput {
  class: string;
  level: number;
}

export interface CreateGrimoireInput {
  name: string;
  characterClasses: CharacterClassesInput[];
}

export interface CreateGrimoireArgs {
  input: CreateGrimoireInput;
}
