import React from 'react';
import { element, oneOfType, arrayOf } from 'prop-types';
import { Box } from '@chakra-ui/core';
import { useQuery } from '@apollo/client';

import { meQuery } from '../../graphql/queries/me';
import NotFound from '../shared/NotFound';
import NoteFeed from './NoteFeed';
import { NotesLoader } from '../shared/Loader';
import { ReactComponent as NotesImage } from '../../images/notes.svg';
import ErrorAlert from '../shared/ErrorAlert';
import GraphqlErrorHandler from '../shared/GraphqlErrorHandler';

const FavoritesBox = ({ children }) => (
  <Box
    d="flex"
    align="center"
    justify="center"
    overflow="scroll"
    width="1000px"
    padding={2}
    alignSelf="center"
    margin="auto"
  >
    {children}
  </Box>
);

const Favorites = () => {
  const { loading, error, data } = useQuery(meQuery, {
    fetchPolicy: 'all',
  });

  if (loading) {
    return (
      <FavoritesBox>
        <NotesLoader backgroundColor="#222121" />
      </FavoritesBox>
    );
  }

  if (error) {
    return (
      <FavoritesBox>
        <GraphqlErrorHandler err={error} ErrComponent={ErrorAlert} />
      </FavoritesBox>
    );
  }

  if (data && data.me.favorites.length === 0) {
    return (
      <FavoritesBox>
        <NotFound
          size="1000px"
          NotFoundComp={NotesImage}
          text="You don't have any favorites just yet!"
        />
      </FavoritesBox>
    );
  }

  return (
    <FavoritesBox>
      {data && <NoteFeed notes={data.me.favorites} />}
    </FavoritesBox>
  );
};

FavoritesBox.propTypes = {
  children: oneOfType([element, arrayOf(element)]).isRequired,
};

export default Favorites;
