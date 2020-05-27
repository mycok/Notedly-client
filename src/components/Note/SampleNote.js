import React from 'react';
import { instanceOf } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { Avatar, Box, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const Note = ({ note }) => {
  const {
    id,
    author: { avatar, username },
    content,
    createdAt,
  } = note;

  return (
    <Link to={`/note/${id}`}>
      <Box
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        mt={5}
        mb={5}
        padding={5}
        borderColor="grey.200"
        boxShadow="lg"
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
          <ReactMarkdown source={content.substring(0, 120)} />
        </Box>
      </Box>
    </Link>
  );
};

Note.propTypes = {
  note: instanceOf(Object).isRequired,
};

export default Note;
