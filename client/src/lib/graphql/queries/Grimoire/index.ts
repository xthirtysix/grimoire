import { gql } from 'apollo-boost';

export const GRIMOIRE = gql`
  query Grimoire($id: ID!) {
    grimoire(id: $id) {
      id
      owner {
        id
      }
      name
      characterClasses {
        class
        level
      }
      spells
    }
  }
`;
