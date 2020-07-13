import { gql } from '@apollo/client';

export const toggleFavoriteMutation = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      favoritedBy {
        username
      }
      favoriteCount
    }
  }
`;
