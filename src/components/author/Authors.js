import React from 'react';
import { useQuery } from '@apollo/client';
import { Box } from '@chakra-ui/core';

import Author from './Author';
import { UserLoader } from '../shared/Loader';
import { usersQuery } from '../../graphql/queries/users';

const Authors = () => {
  const { loading, error, data } = useQuery(usersQuery, { errorPolicy: 'all' });

  if (error) {
    if (error.networkError) {
      return <p>{`....error...${error.message}`}</p>;
    }
    return error.graphQLErrors.map(({ message }) => (
      <p key={message.charAt(2)}>{`....error...${message}`}</p>
    ));
  }
  // TODO
  // - check for empty author list and display a no users found component
  // - render a serverError component
  return (
    <Box>
      {loading ? (
        <UserLoader backgroundColor="#222121" />
      ) : (
        data && data.users.map((user) => <Author key={user.id} author={user} />)
      )}
    </Box>
  );
};

export default Authors;
