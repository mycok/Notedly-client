import { gql } from '@apollo/client';

export const signInMutation = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      user {
        id
        username
        avatar
      }
      token
    }
  }
`;
