import React, { useEffect } from 'react';

const MyNotes = () => {
  useEffect(() => {
    document.title = 'Upated Title';
  });
  return (
    <div>
      <p>These are my notes</p>
    </div>
  );
};

export default MyNotes;
