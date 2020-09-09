/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SpellsFilter, SpellsSort, CastingTime } from "./../../../globalTypes";

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

export interface Spells_spells_result_damage {
  __typename: "Damage";
  type: string | null;
  isScaleLevel: boolean | null;
  isScaleSlot: boolean | null;
  basic: string | null;
  level2: string | null;
  level3: string | null;
  level4: string | null;
  level5: string | null;
  level6: string | null;
  level7: string | null;
  level8: string | null;
  level9: string | null;
  level10: string | null;
  level11: string | null;
  level12: string | null;
  level13: string | null;
  level14: string | null;
  level15: string | null;
  level16: string | null;
  level17: string | null;
  level18: string | null;
  level19: string | null;
  level20: string | null;
}

export interface Spells_spells_result {
  __typename: "Spell";
  id: string;
  name: string;
  level: number;
  school: string;
  castingTime: CastingTime;
  range: Spells_spells_result_range;
  duration: Spells_spells_result_duration;
  isConcentration: boolean;
  components: Spells_spells_result_components | null;
  materials: string | null;
  description: string;
  damage: Spells_spells_result_damage | null;
  source: string;
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
  filters?: (SpellsFilter | null)[] | null;
  sort?: SpellsSort | null;
  limit?: number | null;
}
