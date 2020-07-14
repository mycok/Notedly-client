import React from 'react';
import { instanceOf } from 'prop-types';

import SampleNote from './SampleNote';

const NoteFeed = ({ notes }) => (
  <div>
    {notes && notes.map((note) => <SampleNote key={note.id} note={note} />)}
  </div>
);

NoteFeed.propTypes = {
  notes: instanceOf(Array),
};

NoteFeed.defaultProps = {
  notes: [],
};
export default NoteFeed;
