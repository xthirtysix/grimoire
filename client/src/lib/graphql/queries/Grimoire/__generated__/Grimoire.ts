/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Grimoire
// ====================================================

export interface Grimoire_grimoire_owner {
  __typename: "User";
  id: string;
}

export interface Grimoire_grimoire_characterClasses {
  __typename: "CharacterClass";
  class: string;
  level: number;
}

export interface Grimoire_grimoire_spells_result {
  __typename: "Spell";
  id: string;
  name: string;
  level: number;
  description: string;
}

export interface Grimoire_grimoire_spells {
  __typename: "Spells";
  total: number;
  result: Grimoire_grimoire_spells_result[];
}

export interface Grimoire_grimoire {
  __typename: "Grimoire";
  id: string;
  owner: Grimoire_grimoire_owner;
  name: string;
  characterClasses: Grimoire_grimoire_characterClasses[];
  spells: Grimoire_grimoire_spells | null;
}

export interface Grimoire {
  grimoire: Grimoire_grimoire;
}

export interface GrimoireVariables {
  id: string;
}
