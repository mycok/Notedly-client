import React, { useEffect } from 'react';

export const MyNotes = () => {
  useEffect(() => {
    document.title = 'Upated Title';
  });
  return (
    <div>
      <p>These are my notes</p>
    </div>
  );
};
