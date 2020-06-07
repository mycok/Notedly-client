import React from 'react';
import { instanceOf } from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Avatar, Text } from '@chakra-ui/core';
// TODO:
// - fix the name length to avoid truncating
const Author = ({ author }) => {
  const {
    username, email, avatar, notes,
  } = author;

  return (
    <Link to={{ pathname: '/my-notes', state: { author } }}>
      <Box
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        mt={3}
        mb={3}
        padding={3}
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
            <Text ml={2} fontSize="sm">
              {username}
            </Text>
          </Box>
          <Text fontSize="sm">{`Published Notes: ${notes.length}`}</Text>
        </Box>
        <Box d="flex" mt={5} justifyContent="flex-end">
          <Text fontSize="sm">{email}</Text>
        </Box>
      </Box>
    </Link>
  );
};

Author.propTypes = {
  author: instanceOf(Object).isRequired,
};
export default Author;
