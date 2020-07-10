import React from 'react';
import { element, oneOfType, arrayOf } from 'prop-types';
import { Box } from '@chakra-ui/core';
import { useQuery } from '@apollo/client';

import { meQuery } from '../../graphql/queries/me';
import NotFound from '../shared/NotFound';
import NoteFeed from './NoteFeed';
import { NotesLoader } from '../shared/Loader';
import NotesImage from '../../images/notes.svg';
import ErrorAlert from '../shared/ErrorAlert';
import GraphqlErrorHandler from '../shared/GraphqlErrorHandler';

// TODO:
// find a way to merge both AuthorNotes and MyNotes components since they both display the same data
const MyNotesBox = ({ children }) => (
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

const MyNotes = () => {
  const { loading, error, data } = useQuery(meQuery, {
    fetchPolicy: 'all',
  });

  if (loading) {
    return (
      <MyNotesBox>
        <NotesLoader backgroundColor="#222121" />
      </MyNotesBox>
    );
  }

  if (error) {
    return (
      <MyNotesBox>
        <GraphqlErrorHandler err={error} ErrComponent={ErrorAlert} />
      </MyNotesBox>
    );
  }

  if (data && data.me.notes.length === 0) {
    return (
      <MyNotesBox>
        <NotFound
          size="1000px"
          NotFoundComp={NotesImage}
          text="No Notes Available !"
        />
      </MyNotesBox>
    );
  }

  return <MyNotesBox>{data && <NoteFeed notes={data.me.notes} />}</MyNotesBox>;
};

MyNotesBox.propTypes = {
  children: oneOfType([element, arrayOf(element)]).isRequired,
};

export default MyNotes;
