import React, { useEffect } from 'react';

import NotFound from '../shared/NotFound';

const Favorites = () => {
  useEffect(() => {
    document.title = 'Favourites';
  });
  // TODO:
  // - access the signedIn user and pass the favorites list to the NoteFeed component
  // - display the favorites as a list of notes or display a not found component
  return <NotFound size="320px" />;
};

export default Favorites;
