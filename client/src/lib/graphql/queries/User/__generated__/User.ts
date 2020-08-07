/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user_grimoires_result_characterClasses {
  __typename: "CharacterClass";
  class: string;
  level: number;
}

export interface User_user_grimoires_result {
  __typename: "Grimoire";
  id: string;
  name: string;
  characterClasses: User_user_grimoires_result_characterClasses[];
}

export interface User_user_grimoires {
  __typename: "Grimoires";
  total: number;
  result: User_user_grimoires_result[];
}

export interface User_user {
  __typename: "User";
  id: string;
  name: string;
  avatar: string;
  contact: string;
  currentGrimoire: string | null;
  grimoires: User_user_grimoires | null;
}

export interface User {
  user: User_user;
}

export interface UserVariables {
  id: string;
}
