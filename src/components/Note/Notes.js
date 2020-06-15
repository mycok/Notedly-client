import React from 'react';
import { useQuery } from '@apollo/client';

import { noteFeedQuery } from '../../graphql/queries/noteFeed';
import NoteFeed from './NoteFeed';
import { NotesLoader } from '../shared/Loader';
import NotFound from '../shared/NotFound';

const Notes = () => {
  const { loading, error, data } = useQuery(noteFeedQuery, {
    errorPolicy: 'all',
  });

  if (loading) return <NotesLoader backgroundColor="#222121" />;

  if (error) {
    if (error.networkError) {
      return <p>{`....error...${error.message}`}</p>;
    }
    return error.graphQLErrors.map(({ message }) => (
      <p key={message.charAt(2)}>{`....error...${message}`}</p>
    ));
  }

  return data.noteFeed.notes.length > 0 ? (
    <NoteFeed notes={data.noteFeed.notes} />
  ) : (
    <NotFound size="1000px" />
  );
};

export default Notes;
