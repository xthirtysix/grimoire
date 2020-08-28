import { gql } from 'apollo-boost'

export const DELETE_GRIMOIRE = gql`
  mutation DeleteGrimoire($id: ID!) {
    deleteGrimoire(id: $id)
  }
`
