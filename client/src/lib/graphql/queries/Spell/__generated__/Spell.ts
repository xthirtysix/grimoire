/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Level, CastingTime, Duration, SpellTag, ClassType, Conditions, DiceType, DamageType, Stat } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: Spell
// ====================================================

export interface Spell_spell_name {
  __typename: "Bilingual";
  en: string;
  ru: string;
}

export interface Spell_spell_range {
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

export interface Spell_spell_materials {
  __typename: "Bilingual";
  en: string;
  ru: string;
}

export interface Spell_spell_description {
  __typename: "Bilingual";
  en: string;
  ru: string;
}

export interface Spell_spell_atHigherLevels {
  __typename: "Bilingual";
  en: string;
  ru: string;
}

export interface Spell_spell_atHigherSlots {
  __typename: "Bilingual";
  en: string;
  ru: string;
}

export interface Spell_spell_damageDice {
  __typename: "Dice";
  dice: DiceType;
  quantity: number;
}

export interface Spell_spell_damageScale_dice {
  __typename: "Dice";
  dice: DiceType;
  quantity: number;
}

export interface Spell_spell_damageScale {
  __typename: "DamageScale";
  level: number;
  dice: Spell_spell_damageScale_dice;
}

export interface Spell_spell {
  __typename: "Spell";
  id: string;
  name: Spell_spell_name;
  level: Level;
  school: string;
  castingTime: CastingTime;
  range: Spell_spell_range;
  duration: Duration;
  isConcentration: boolean;
  isRitual: boolean;
  components: Spell_spell_components | null;
  materials: Spell_spell_materials | null;
  description: Spell_spell_description;
  source: string;
  tags: SpellTag[];
  classes: ClassType[];
  conditions: (Conditions | null)[] | null;
  atHigherLevels: Spell_spell_atHigherLevels | null;
  atHigherSlots: Spell_spell_atHigherSlots | null;
  damageDice: Spell_spell_damageDice | null;
  damageScale: Spell_spell_damageScale[] | null;
  damageType: DamageType | null;
  saveRequired: Stat | null;
}

export interface Spell {
  spell: Spell_spell;
}

export interface SpellVariables {
  name: string;
}
