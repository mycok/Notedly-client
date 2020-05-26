import React from 'react';
import { useQuery } from '@apollo/client';

import { NoteFeedQuery } from '../../graphql/queries/noteFeed';
import NoteFeed from '../Note/NoteFeed';
import Loader from './Loader';

const Home = () => {
  const { loading, error, data } = useQuery(NoteFeedQuery);

  if (loading) {
    return (
      <Loader>
        <NoteFeed />
      </Loader>
    );
  }

  if (error) return <p style={{ textAlign: 'center' }}>....Error......</p>;

  return <NoteFeed notes={data.noteFeed.notes} />;
};

export default Home;
