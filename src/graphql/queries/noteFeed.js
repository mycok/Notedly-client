import { gql } from '@apollo/client';

export const NoteFeedQuery = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      notes {
        id
        content
        favoriteCount
        createdAt
        author {
          id
          username
          avatar
        }
      }
      cursor
      hasNextPage
    }
  }
`;
