import { gql } from "apollo-boost";

export const USER = gql`
  query User($id: ID!, $grimoiresPage: Int!, $limit: Int!) {
    user(id: $id) {
      id
      name
      avatar
      contact
      grimoires(limit: $limit, page: $grimoiresPage) {
        total
        result {
          ownerName
          ownerClass
          ownerLevel
        }
      }
    }
  }
`;
