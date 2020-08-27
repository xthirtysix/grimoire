import { gql } from 'apollo-boost'

export const CREATE_GRIMOIRE = gql`
  mutation CreateGrimoire($input: CreateGrimoireInput!) {
    createGrimoire(input: $input) {
      id
    }
  }
`
