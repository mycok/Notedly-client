import React from 'react';
import { useQuery } from '@apollo/client';

import { NoteFeedQuery } from '../../graphql/queries/noteFeed';
import NoteFeed from '../Note/NoteFeed';
import { NotesLoader } from './Loader';
import NotFound from './NotFound';

const Home = () => {
  const { loading, error, data } = useQuery(NoteFeedQuery);

  if (loading) return <NotesLoader />;

  if (error) return <p style={{ textAlign: 'center' }}>....Error......</p>;

  return data.noteFeed.notes.length > 0 ? (
    <NoteFeed notes={data.noteFeed.notes} />
  ) : (
    <NotFound />
  );
};

export default Home;
