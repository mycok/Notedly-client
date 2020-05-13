import React, { useEffect } from 'react';

export const Favorites = () => {
  useEffect(() => {
    document.title = 'Favourites';
  });
  return <p>These are my favorites</p>;
};
