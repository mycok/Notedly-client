import React from 'react';
import { string, instanceOf } from 'prop-types';
import { useQuery } from '@apollo/client';
import { Box } from '@chakra-ui/core';

import { NotesLoader } from '../core/Loader';
import NoteFeed from './NoteFeed';
import NotFound from '../core/NotFound';
import { notesByAuthorQuery } from '../../graphql/queries/noteByAuthor';

const AuthorNotes = ({ location }) => {
  const { loading, error, data } = useQuery(notesByAuthorQuery, {
    errorPolicy: 'all',
    variables: { id: location.state.authorId },
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

  return (
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
      {data.notesByAuthor.length > 0 ? (
        <NoteFeed notes={data.notesByAuthor} />
      ) : (
        <NotFound size="1000px" />
      )}
    </Box>
  );
};

AuthorNotes.propTypes = {
  authorId: string.isRequired,
  location: instanceOf(Object).isRequired,
};

export default AuthorNotes;
