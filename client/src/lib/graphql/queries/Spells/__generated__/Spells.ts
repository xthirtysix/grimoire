/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SpellsFilter, SpellsSort, Level, CastingTime, SpellTag, ClassType, Conditions, DiceType, DamageType, Stat } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: Spells
// ====================================================

export interface Spells_spells_result_range {
  __typename: "Scalar";
  value: number | null;
  unit: string;
}

export interface Spells_spells_result_duration {
  __typename: "Scalar";
  value: number | null;
  unit: string;
}

export interface Spells_spells_result_components {
  __typename: "Components";
  verbal: boolean;
  somatic: boolean;
  material: boolean;
}

export interface Spells_spells_result_damageDice {
  __typename: "Dice";
  dice: DiceType;
  quantity: number;
}

export interface Spells_spells_result_damageScale_dice {
  __typename: "Dice";
  dice: DiceType;
  quantity: number;
}

export interface Spells_spells_result_damageScale {
  __typename: "DamageScale";
  level: number;
  dice: Spells_spells_result_damageScale_dice;
}

export interface Spells_spells_result {
  __typename: "Spell";
  id: string;
  name: string;
  level: Level;
  school: string;
  castingTime: CastingTime;
  range: Spells_spells_result_range;
  duration: Spells_spells_result_duration;
  isConcentration: boolean;
  isRitual: boolean;
  components: Spells_spells_result_components | null;
  materials: string | null;
  description: string;
  source: string;
  tags: SpellTag[];
  classes: ClassType[];
  conditions: (Conditions | null)[] | null;
  atHigherLevels: string | null;
  atHigherSlots: string | null;
  damageDice: Spells_spells_result_damageDice | null;
  damageScale: Spells_spells_result_damageScale[] | null;
  damageType: DamageType | null;
  saveRequired: Stat | null;
}

export interface Spells_spells {
  __typename: "Spells";
  total: number;
  result: Spells_spells_result[] | null;
}

export interface Spells {
  spells: Spells_spells;
}

export interface SpellsVariables {
  grimoireID?: string | null;
  filters?: SpellsFilter | null;
  sort?: SpellsSort | null;
  limit?: number | null;
}
