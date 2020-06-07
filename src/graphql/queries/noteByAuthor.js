import { gql } from '@apollo/client';

export const notesByAuthorQuery = gql`
  query notesByAuthor($id: ID!) {
    notesByAuthor(id: $id) {
      id
      content
      createdAt
      favoriteCount
      author {
        id
        username
        avatar
      }
    }
  }
`;
