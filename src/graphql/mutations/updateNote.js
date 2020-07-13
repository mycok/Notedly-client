import { gql } from '@apollo/client';

export const updateNoteMutation = gql`
  mutation updateNote($id: ID!, $content: String!) {
    updateNote(id: $id, content: $content) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
