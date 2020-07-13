import { gql } from '@apollo/client';

export const deleteNoteMutation = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id) {
      success
    }
  }
`;
