import React from 'react';
import { instanceOf } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { Avatar, Box, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const SampleNote = ({ note }) => {
  const {
    id,
    author: { avatar, username },
    content,
    createdAt,
  } = note;

  return (
    <Link to={`/notes/${id}`}>
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
        onClick={() => null}
      >
        <Box
          d="flex"
          justifyContent="space-between"
          dir="row"
          alignItems="center"
        >
          <Box d="flex" alignItems="center">
            <Avatar size="sm" name={username} src={avatar} />
            <Text ml={2} color="grey" fontSize="sm">
              {username}
            </Text>
          </Box>
          <Text color="grey" fontSize="sm">
            {format(new Date(createdAt), 'MMM dd yyyy')}
          </Text>
        </Box>
        <Box mt={5}>
          <ReactMarkdown source={content.substring(0, 180)} />
        </Box>
      </Box>
    </Link>
  );
};

SampleNote.propTypes = {
  note: instanceOf(Object).isRequired,
};

export default SampleNote;
