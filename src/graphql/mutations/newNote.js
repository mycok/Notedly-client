import { gql } from '@apollo/client';

export const newNoteQuery = gql`
  mutation newNote($content: String!) {
    newNote(content: $content) {
      id
    }
  }
`;
