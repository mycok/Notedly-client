import React from 'react';
import { useQuery } from '@apollo/client';

import Author from './Author';
import { NotesLoader } from '../core/Loader';
import { UsersQuery } from '../../graphql/queries/users';

const Authors = () => {
  const { loading, error, data } = useQuery(UsersQuery, { errorPolicy: 'all' });
  if (loading) return <NotesLoader />;
  if (error) {
    if (error.networkError) {
      return <p>{`....error...${error.message}`}</p>;
    }
    return error.graphQLErrors.map(({ message }) => (
      <p key={message.charAt(2)}>{`....error...${message}`}</p>
    ));
  }

  return (
    <div>
      {data && data.users.map((user) => <Author key={user.id} author={user} />)}
    </div>
  );
};

export default Authors;
