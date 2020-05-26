import React from 'react';
import { instanceOf } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

const Note = ({ note }) => {
  const {
    author: { avatar, username },
    content,
    createdAt,
    favoriteCount,
  } = note;

  return (
    <article>
      <img src={avatar} alt="{username}avatar" height="50px" width="50px" />
      {' '}
      {username}
      {' '}
      {format(new Date(createdAt), 'MMM dd yyyy')}
      {' '}
      {favoriteCount}
      {' '}
      <ReactMarkdown source={content} />
    </article>
  );
};

Note.propTypes = {
  note: instanceOf(Object).isRequired,
};

export default Note;
