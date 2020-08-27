/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ClassType } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: Grimoire
// ====================================================

export interface Grimoire_grimoire_owner {
  __typename: "User";
  id: string;
}

export interface Grimoire_grimoire_characterClasses {
  __typename: "CharacterClass";
  class: ClassType;
  level: number;
}

export interface Grimoire_grimoire_spells_result_castingTime {
  __typename: "Scalar";
  value: number | null;
  unit: string;
}

export interface Grimoire_grimoire_spells_result_range {
  __typename: "Scalar";
  value: number | null;
  unit: string;
}

export interface Grimoire_grimoire_spells_result_duration {
  __typename: "Scalar";
  value: number | null;
  unit: string;
}

export interface Grimoire_grimoire_spells_result_components {
  __typename: "Components";
  verbal: boolean;
  somatic: boolean;
  material: boolean;
}

export interface Grimoire_grimoire_spells_result_damage {
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

export interface Grimoire_grimoire_spells_result {
  __typename: "Spell";
  id: string;
  name: string;
  level: number;
  school: string;
  castingTime: Grimoire_grimoire_spells_result_castingTime;
  range: Grimoire_grimoire_spells_result_range;
  duration: Grimoire_grimoire_spells_result_duration;
  isConcentration: boolean;
  components: Grimoire_grimoire_spells_result_components | null;
  materials: string | null;
  description: string;
  damage: Grimoire_grimoire_spells_result_damage | null;
  source: string;
}

export interface Grimoire_grimoire_spells {
  __typename: "Spells";
  total: number;
  result: Grimoire_grimoire_spells_result[] | null;
}

export interface Grimoire_grimoire {
  __typename: "Grimoire";
  id: string;
  owner: Grimoire_grimoire_owner;
  name: string;
  characterClasses: Grimoire_grimoire_characterClasses[];
  spells: Grimoire_grimoire_spells;
}

export interface Grimoire {
  grimoire: Grimoire_grimoire;
}

export interface GrimoireVariables {
  id: string;
}
