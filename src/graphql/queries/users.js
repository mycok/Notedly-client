import { gql } from '@apollo/client';

export const usersQuery = gql`
  query users {
    users {
      id
      username
      email
      avatar
      notes {
        id
      }
    }
  }
`;
