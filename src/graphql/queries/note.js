import { gql } from '@apollo/client';

export const NoteByIdQuery = gql`
  query Note($id: ID!) {
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
