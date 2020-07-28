/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user_grimoire_characterClasses {
  __typename: "CharacterClass";
  class: string;
  level: number;
}

export interface User_user_grimoire {
  __typename: "Grimoire";
  id: string;
  name: string;
  characterClasses: User_user_grimoire_characterClasses[];
  spells: (string | null)[];
  isCurrent: boolean;
}

export interface User_user {
  __typename: "User";
  id: string;
  name: string;
  avatar: string;
  contact: string;
  grimoires: User_user_grimoire[] | null;
}

export interface User {
  user: User_user;
}

export interface UserVariables {
  id: string;
}
