import { gql } from 'apollo-boost';

export const GOOGLE_AUTH_URL = gql`
  query GoogleAuthUrl {
    authUrl
  }
`;
