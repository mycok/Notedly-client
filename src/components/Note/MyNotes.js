import React from 'react';
import { Box } from '@chakra-ui/core';
import { useQuery } from '@apollo/client';

import { notesByAuthorQuery } from '../../graphql/queries/notesByAuthor';
import NotFound from '../shared/NotFound';
import NoteFeed from './NoteFeed';
import { NotesLoader } from '../shared/Loader';
import NotesImage from '../../images/notes.svg';
import ErrorAlert from '../shared/ErrorAlert';
import GraphqlErrorHandler from '../shared/GraphqlErrorHandler';
import { isAuthenticated } from '../../utils/authHelpers';

const MyNotes = () => {
  const user = isAuthenticated();
  const { loading, error, data } = useQuery(notesByAuthorQuery, {
    fetchPolicy: 'all',
    variables: { id: user.user.id },
  });

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
      {error && <GraphqlErrorHandler err={error} ErrComponent={ErrorAlert} />}
      {loading && <NotesLoader backgroundColor="#222121" />}
      {data && data.notesByAuthor.length === 0 ? (
        <NotFound
          size="1000px"
          NotFoundComp={NotesImage}
          text="No Notes Available !"
        />
      ) : (
        data && <NoteFeed notes={data.notesByAuthor} />
      )}
    </Box>
  );
};

export default MyNotes;
