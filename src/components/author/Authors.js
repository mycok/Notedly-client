import React from 'react';
import { element, oneOfType, arrayOf } from 'prop-types';
import { useQuery } from '@apollo/client';
import { Box } from '@chakra-ui/core';

import Author from './Author';
import { UserLoader } from '../shared/Loader';
import { usersQuery } from '../../graphql/queries/users';
import GraphqlErrorHandler from '../shared/GraphqlErrorHandler';
import ErrorAlert from '../shared/ErrorAlert';
import NotFound from '../shared/NotFound';
import { ReactComponent as AuthorImage } from '../../images/authors.svg';

const AuthorsBox = ({ children }) => (
  <Box dir="column" overflow="scroll" width="500px" padding={2} margin="auto">
    {children}
  </Box>
);

const Authors = () => {
  const { loading, error, data } = useQuery(usersQuery, { errorPolicy: 'all' });

  if (loading) {
    return (
      <AuthorsBox>
        <UserLoader backgroundColor="#222121" />
      </AuthorsBox>
    );
  }

  if (error) {
    return (
      <AuthorsBox>
        <GraphqlErrorHandler err={error} ErrComponent={ErrorAlert} />
      </AuthorsBox>
    );
  }

  if (data && data.users.length === 0) {
    return (
      <AuthorsBox>
        <NotFound
          size="500px"
          NotFoundComp={AuthorImage}
          text="No Author's Available !"
        />
      </AuthorsBox>
    );
  }

  return (
    <AuthorsBox>
      {data && data.users.map((user) => <Author key={user.id} author={user} />)}
    </AuthorsBox>
  );
};

AuthorsBox.propTypes = {
  children: oneOfType([element, arrayOf(element)]).isRequired,
};

export default Authors;
