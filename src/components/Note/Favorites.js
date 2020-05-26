import React, { useEffect } from 'react';

const Favorites = () => {
  useEffect(() => {
    document.title = 'Favourites';
  });
  return <p>These are my favorites</p>;
};

export default Favorites;
