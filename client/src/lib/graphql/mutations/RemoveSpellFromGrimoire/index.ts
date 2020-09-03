import { gql } from 'apollo-boost'

export const REMOVE_SPELL_FROM_GRIMOIRE = gql`
  mutation RemoveSpellFromGrimoire($grimoireID: ID!, $spellID: ID!) {
    removeSpellFromGrimoire(grimoireID: $grimoireID, spellID: $spellID)
  }
`
