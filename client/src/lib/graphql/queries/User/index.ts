import { gql } from 'apollo-boost';

export const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      avatar
      contact
      currentGrimoire
      grimoires {
        total
        result {
          id
          name
          characterClasses {
            class
            level
          }
        }
      }
    }
  }
`;
