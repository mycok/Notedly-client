import { gql } from '@apollo/client';

export const meQuery = gql`
  query me {
    me {
      id
      username
      email
      avatar
      notes {
        id
        content
        createdAt
      }
      favorites {
        id
        content
        createdAt
      }
    }
  }
`;
