import React from 'react';
import { instanceOf } from 'prop-types';
import { useQuery } from '@apollo/client';
import { Box } from '@chakra-ui/core';

import { NotesLoader } from '../shared/Loader';
import NoteFeed from './NoteFeed';
import NotFound from '../shared/NotFound';
import ErrorAlert from '../shared/ErrorAlert';
import NotesImage from '../../images/notes.svg';
import GraphqlErrorHandler from '../shared/GraphqlErrorHandler';
import { notesByAuthorQuery } from '../../graphql/queries/notesByAuthor';

const AuthorNotes = ({ match }) => {
  const { loading, error, data } = useQuery(notesByAuthorQuery, {
    errorPolicy: 'all',
    variables: { id: match.params.authorId },
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

AuthorNotes.propTypes = {
  match: instanceOf(Object).isRequired,
};

export default AuthorNotes;
