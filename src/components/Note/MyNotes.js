import React from 'react';
import { string } from 'prop-types';
import { useQuery } from '@apollo/client';

import { NotesLoader } from '../core/Loader';
import NoteFeed from './NoteFeed';
import { notesByAuthorQuery } from '../../graphql/queries/noteByAuthor';

const MyNotes = ({ authorId }) => {
  const { loading, error, data } = useQuery(notesByAuthorQuery, {
    errorPolicy: 'all',
    variables: { id: authorId },
  });

  if (loading) return <NotesLoader />;

  if (error) {
    if (error.networkError) {
      return <p>{`....error...${error.message}`}</p>;
    }
    return error.graphQLErrors.map(({ message }) => (
      <p key={message.charAt(2)}>{`....error...${message}`}</p>
    ));
  }

  return <NoteFeed notes={data.notesByAuthor} />;
};

MyNotes.propTypes = {
  authorId: string.isRequired,
};

export default MyNotes;
