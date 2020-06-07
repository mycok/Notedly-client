import { gql } from '@apollo/client';

export const noteByIdQuery = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      content
      author {
        id
        username
        avatar
      }
      favoritedBy {
        username
      }
      favoriteCount
      createdAt
      updatedAt
    }
  }
`;
