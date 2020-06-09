import React from 'react';
import { useQuery } from '@apollo/client';

import { noteFeedQuery } from '../../graphql/queries/noteFeed';
import NoteFeed from './NoteFeed';
import { NotesLoader } from '../core/Loader';
import NotFound from '../core/NotFound';

const Notes = () => {
  const { loading, error, data } = useQuery(noteFeedQuery, {
    errorPolicy: 'all',
  });

  if (loading) return <NotesLoader />;

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
