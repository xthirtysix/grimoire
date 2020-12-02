/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Level } from "./../../../globalTypes";

// ====================================================
// GraphQL query operation: SpellNames
// ====================================================

export interface SpellNames_spells_result_name {
  __typename: "Bilingual";
  en: string;
  ru: string;
}

export interface SpellNames_spells_result {
  __typename: "Spell";
  level: Level;
  name: SpellNames_spells_result_name;
}

export interface SpellNames_spells {
  __typename: "Spells";
  total: number;
  result: SpellNames_spells_result[] | null;
}

export interface SpellNames {
  spells: SpellNames_spells;
}
