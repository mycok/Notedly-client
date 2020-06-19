import React from 'react';
import { Box } from '@chakra-ui/core';
import { useQuery } from '@apollo/client';

import { notesByAuthorQuery } from '../../graphql/queries/notesByAuthor';
import NotFound from '../shared/NotFound';
import NoteFeed from './NoteFeed';
import { NotesLoader } from '../shared/Loader';
import { isAuthenticated } from '../../utils/authHelpers';

const MyNotes = () => {
  const user = isAuthenticated();
  const { loading, error, data } = useQuery(notesByAuthorQuery, {
    fetchPolicy: 'all',
    variables: { id: user.user.id },
  });

  if (error) {
    if (error.networkError) {
      return <p>{`....error...${error.message}`}</p>;
    }
    return error.graphQLErrors.map(({ message }) => (
      <p key={message.charAt(2)}>{`....error...${message}`}</p>
    ));
  }
  // TODO:
  // - use the me query and pass the favorites list to the NoteFeed component
  // - display the favorites as a list of notes or display a not found component
  // - render a serverError component in case of an error while fetching the data
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

export default MyNotes;
