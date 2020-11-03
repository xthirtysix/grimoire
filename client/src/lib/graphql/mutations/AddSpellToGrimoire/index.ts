import { gql } from 'apollo-boost';

export const ADD_SPELL_TO_GRIMOIRE = gql`
  mutation AddSpellToGrimoire($grimoireID: ID!, $spellID: ID!) {
    addSpellToGrimoire(grimoireID: $grimoireID, spellID: $spellID)
  }
`;
