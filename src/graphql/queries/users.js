import { gql } from '@apollo/client';

export const UsersQuery = gql`
  query users {
    users {
      id
      username
      email
      avatar
      notes {
        content
      }
    }
  }
`;
