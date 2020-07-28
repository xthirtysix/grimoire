import { gql } from "apollo-boost";

export const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      avatar
      contact
      grimoires {
        id
        name
        characterClasses {
          class
          level
        }
        spells
        isCurrent
      }
    }
  }
`;
