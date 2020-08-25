/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Spell
// ====================================================

export interface Spell_spell_castingTime {
  __typename: "Scalar";
  value: number | null;
  unit: string;
}

export interface Spell_spell_range {
  __typename: "Scalar";
  value: number | null;
  unit: string;
}

export interface Spell_spell_duration {
  __typename: "Scalar";
  value: number | null;
  unit: string;
}

export interface Spell_spell_components {
  __typename: "Components";
  verbal: boolean;
  somatic: boolean;
  material: boolean;
}

export interface Spell_spell_damage {
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

export interface Spell_spell {
  __typename: "Spell";
  id: string;
  name: string;
  level: number;
  school: string;
  castingTime: Spell_spell_castingTime;
  range: Spell_spell_range;
  duration: Spell_spell_duration;
  isConcentration: boolean;
  components: Spell_spell_components | null;
  materials: string | null;
  description: string;
  damage: Spell_spell_damage | null;
  source: string;
}

export interface Spell {
  spell: Spell_spell;
}

export interface SpellVariables {
  name: string;
}
