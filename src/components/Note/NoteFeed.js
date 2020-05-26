import React from 'react';
import { instanceOf } from 'prop-types';

import Note from './Note';

const NoteFeed = ({ notes }) => (
  <div>{notes && notes.map((note) => <Note key={note.id} note={note} />)}</div>
);

NoteFeed.propTypes = {
  notes: instanceOf(Array),
};

NoteFeed.defaultProps = {
  notes: [],
};
export default NoteFeed;
