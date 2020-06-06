import React, { useEffect } from 'react';

// import SampleNote from './SampleNote';
import NotFound from '../core/NotFound';

const Favorites = () => {
  useEffect(() => {
    document.title = 'Favourites';
  });
  // TODO:
  // - access and map the users array to find the favorited Notes for every user
  // - display the favorites as a list of notes or display a not found component
  return <NotFound size="320px" />;
};

export default Favorites;
