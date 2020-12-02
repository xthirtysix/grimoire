import { gql } from 'apollo-boost';

export const SPELL_NAMES = gql`
  query SpellNames {
    spells {
      total
      result {
        level
        name {
          en
          ru
        }
      }
    }
  }
`;
