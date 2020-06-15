import React from 'react';
import { instanceOf } from 'prop-types';
import { useQuery } from '@apollo/client';
import { Box } from '@chakra-ui/core';

import { NotesLoader } from '../shared/Loader';
import NoteFeed from './NoteFeed';
import NotFound from '../shared/NotFound';
import { notesByAuthorQuery } from '../../graphql/queries/noteByAuthor';

const AuthorNotes = ({ match }) => {
  const { loading, error, data } = useQuery(notesByAuthorQuery, {
    errorPolicy: 'all',
    variables: { id: match.params.authorId },
  });

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
      {loading && <NotesLoader backgroundColor="#222121" />}
      {!loading && data.notesByAuthor.length > 0 && (
        <NoteFeed notes={data.notesByAuthor} />
      )}
      {!loading && data.notesByAuthor.length === 0 && (
        <NotFound size="1000px" />
      )}
    </Box>
  );
};

AuthorNotes.propTypes = {
  match: instanceOf(Object).isRequired,
};

export default AuthorNotes;
