import React from 'react';
import {
  instanceOf, element, oneOfType, arrayOf,
} from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import {
  Avatar, Box, Text, IconButton, Link,
} from '@chakra-ui/core';
import { useQuery, useMutation } from '@apollo/client';
import { Link as RouterLink } from 'react-router-dom';

import { noteByIdQuery } from '../../graphql/queries/note';
import { meQuery } from '../../graphql/queries/me';
import { noteFeedQuery } from '../../graphql/queries/noteFeed';
import { deleteNoteMutation } from '../../graphql/mutations/deleteNote';
import { isAuthenticated } from '../../utils/authHelpers';

import { NotesLoader } from '../shared/Loader';
import ErrorAlert from '../shared/ErrorAlert';
import GraphqlErrorHandler from '../shared/GraphqlErrorHandler';
import CustomIconButton from '../shared/CustomIconButton';

const NoteBox = ({ children }) => (
  <Box
    borderWidth="1px"
    bg="#222121"
    rounded="lg"
    overflow="scroll"
    padding={5}
    borderColor="#1a1a1a"
    boxShadow="lg"
    width="1000px"
    margin="auto"
    mt={3}
    mb={3}
  >
    {children}
  </Box>
);

const Note = ({ match, history }) => {
  const user = isAuthenticated();

  const { loading, error, data } = useQuery(noteByIdQuery, {
    variables: { id: match.params.noteId },
  });
  // TODO: - add delete error handling by prefferably displaying a toaster
  const [deleteNote] = useMutation(deleteNoteMutation, {
    refetchQueries: [{ query: noteFeedQuery }, { query: meQuery }],
    onCompleted: () => {
      history.goBack();
    },
  });

  const handleNoteDelete = () => {
    deleteNote({ variables: { id: match.params.noteId } });
  };

  if (loading) {
    return (
      <NoteBox>
        <NotesLoader backgroundColor="#222121" />
      </NoteBox>
    );
  }

  if (error) {
    return (
      <NoteBox>
        <GraphqlErrorHandler err={error} ErrComponent={ErrorAlert} />
      </NoteBox>
    );
  }

  return (
    <NoteBox>
      <>
        <Box d="flex" justifyContent="space-between" alignItems="center">
          <Box d="flex" alignItems="center">
            <Avatar
              size="sm"
              name={data.note.author.username}
              src={data.note.author.avatar}
            />
            <Text ml={2} color="grey" fontSize="sm">
              {data.note.author.username}
            </Text>
          </Box>
          {user && user.user.id === data.note.author.id && (
            <Box d="flex" align="center" justify="space-between">
              <Link
                as={RouterLink}
                to={{
                  pathname: '/new-note',
                  state: { note: data.note },
                }}
              >
                <CustomIconButton icon="edit" label="edit note" />
              </Link>
              <CustomIconButton
                icon="delete"
                label="delete note"
                handler={handleNoteDelete}
              />
            </Box>
          )}
          <Text color="grey" fontSize="sm">
            {format(new Date(data.note.createdAt), 'MMM dd yyyy')}
          </Text>
        </Box>

        <Box mt={8} p={2}>
          <ReactMarkdown source={data.note.content} />
        </Box>

        <Box d="flex" alignItems="center">
          <IconButton
            icon="favorites"
            size="sm"
            variant="ghost"
            variantColor="red"
            aria-label="favorite a note"
            isRound
            isDisabled={user && user.user.id === data.note.author.id}
            mr={3}
            _hover={{ bg: '#3b4048' }}
            _focus={{ borderColor: '#3b4048' }}
          />
          <span>{data.note.favoriteCount}</span>
        </Box>
      </>
    </NoteBox>
  );
};

Note.propTypes = {
  match: instanceOf(Object).isRequired,
  history: instanceOf(Object).isRequired,
};

NoteBox.propTypes = {
  children: oneOfType([element, arrayOf(element)]).isRequired,
};

export default Note;
