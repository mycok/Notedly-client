import { gql } from '@apollo/client';

export const noteFeedQuery = gql`
  query noteFeed($cursor: String) {
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
