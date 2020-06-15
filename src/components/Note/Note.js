import React from 'react';
import { instanceOf } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { Avatar, Box, Text } from '@chakra-ui/core';
import { useQuery } from '@apollo/client';

import { noteByIdQuery } from '../../graphql/queries/note';
import { NotesLoader } from '../shared/Loader';

const Note = ({ match }) => {
  const { loading, error, data } = useQuery(noteByIdQuery, {
    variables: { id: match.params.noteId },
  });

  if (error) {
    if (error.networkError) {
      return <p>{`....error...${error.message}`}</p>;
    }
    return error.graphQLErrors.map(({ message }) => (
      <p
        key={message.charAt(2)}
        style={{ textAlign: 'center' }}
      >
        {`....error...${message}`}
      </p>
    ));
  }

  return (
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
      {loading ? (
        <NotesLoader />
      ) : (
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
            <Text color="grey" fontSize="sm">
              {format(new Date(data.note.createdAt), 'MMM dd yyyy')}
            </Text>
          </Box>
          <Box m={2} p={2}>
            <ReactMarkdown source={data.note.content} />
          </Box>
        </>
      )}
    </Box>
  );
};

Note.propTypes = {
  match: instanceOf(Object).isRequired,
};

export default Note;
