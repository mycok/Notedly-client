import React from 'react';
import {
  instanceOf, element, oneOfType, arrayOf,
} from 'prop-types';
import { useQuery } from '@apollo/client';
import { Box } from '@chakra-ui/core';

import { NotesLoader } from '../shared/Loader';
import NoteFeed from './NoteFeed';
import NotFound from '../shared/NotFound';
import ErrorAlert from '../shared/ErrorAlert';
import { ReactComponent as NotesImage } from '../../images/notes.svg';
import GraphqlErrorHandler from '../shared/GraphqlErrorHandler';
import { notesByAuthorQuery } from '../../graphql/queries/notesByAuthor';

// TODO:
// find a way to merge both AuthorNotes and MyNotes components since they both display the same data
const AuthorNotesBox = ({ children }) => (
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

const AuthorNotes = ({ match }) => {
  const { loading, error, data } = useQuery(notesByAuthorQuery, {
    errorPolicy: 'all',
    variables: { id: match.params.authorId },
  });

  if (loading) {
    return (
      <AuthorNotesBox>
        <NotesLoader backgroundColor="#222121" />
      </AuthorNotesBox>
    );
  }

  if (error) {
    return (
      <AuthorNotesBox>
        <GraphqlErrorHandler err={error} ErrComponent={ErrorAlert} />
      </AuthorNotesBox>
    );
  }

  if (data && data.notesByAuthor.length === 0) {
    return (
      <AuthorNotesBox>
        <NotFound
          size="1000px"
          NotFoundComp={NotesImage}
          text="No Notes Available !"
        />
      </AuthorNotesBox>
    );
  }

  return (
    <AuthorNotesBox>
      {data && <NoteFeed notes={data.notesByAuthor} />}
    </AuthorNotesBox>
  );
};

AuthorNotes.propTypes = {
  match: instanceOf(Object).isRequired,
};

AuthorNotesBox.propTypes = {
  children: oneOfType([element, arrayOf(element)]).isRequired,
};

export default AuthorNotes;
