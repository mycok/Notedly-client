import React from 'react';
import { useQuery } from '@apollo/client';
import { Box } from '@chakra-ui/core';

import Author from './Author';
import { UserLoader } from '../shared/Loader';
import { usersQuery } from '../../graphql/queries/users';
import GraphqlErrorHandler from '../shared/GraphqlErrorHandler';
import ErrorAlert from '../shared/ErrorAlert';
import NotFound from '../shared/NotFound';
import AuthorImage from '../../images/authors.svg';

const Authors = () => {
  const { loading, error, data } = useQuery(usersQuery, { errorPolicy: 'all' });

  return (
    <Box dir="column" overflow="scroll" width="500px" padding={2} margin="auto">
      {error && <GraphqlErrorHandler err={error} ErrComponent={ErrorAlert} />}
      {loading && <UserLoader backgroundColor="#fff" />}
      {data && data.users.length === 0 ? (
        <NotFound
          size="500px"
          NotFoundComp={AuthorImage}
          text="No Author's Available !"
        />
      ) : (
        data && data.users.map((user) => <Author key={user.id} author={user} />)
      )}
    </Box>
  );
};

export default Authors;
