import React from 'react';
import { instanceOf } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { Avatar, Box, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import { isAuthenticated } from '../../utils/authHelpers';

const SampleNote = ({ note }) => {
  const user = isAuthenticated();
  return (
    <Link to={`/notes/${note.id}`}>
      <Box
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        mt={3}
        mb={3}
        padding={3}
        borderColor="#1a1a1a"
        boxShadow="lg"
        bg="#222121"
        color="#fff"
      >
        <Box
          d="flex"
          justifyContent="space-between"
          dir="row"
          alignItems="center"
        >
          <Box d="flex" alignItems="center">
            <Avatar
              size="sm"
              name={
                (note.author && note.author.username)
                || (user && user.user.username)
              }
              src={
                (note.author && note.author.avatar)
                || (user && user.user.avatar)
              }
            />
            <Text ml={2} color="grey" fontSize="sm">
              {(note.author && note.author.username)
                || (user && user.user.username)}
            </Text>
          </Box>
          <Text color="grey" fontSize="sm">
            {format(new Date(note.createdAt), 'MMM dd yyyy')}
          </Text>
        </Box>
        <Box mt={5}>
          <ReactMarkdown source={note.content.substring(0, 180)} />
        </Box>
      </Box>
    </Link>
  );
};

SampleNote.propTypes = {
  note: instanceOf(Object).isRequired,
};

export default SampleNote;
