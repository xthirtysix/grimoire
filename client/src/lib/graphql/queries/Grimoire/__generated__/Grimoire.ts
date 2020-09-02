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

export interface Grimoire_grimoire {
  __typename: "Grimoire";
  id: string;
  owner: Grimoire_grimoire_owner;
  name: string;
  characterClasses: Grimoire_grimoire_characterClasses[];
  spells: string[] | null;
}

export interface Grimoire {
  grimoire: Grimoire_grimoire;
}

export interface GrimoireVariables {
  id: string;
}
