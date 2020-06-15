import React from 'react';
import { bool, func } from 'prop-types';
import { Grid, Box } from '@chakra-ui/core';

import Authors from '../author/Authors';
import Favorites from '../Note/Favorites';
import Notes from '../Note/Notes';

const Home = ({ isNavBarVisible, toogleNavBarVisibility }) => {
  React.useEffect(() => {
    localStorage.setItem(
      'jwt',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWNlZjExMTMwOTljZTE5NjBhMDA2MTIiLCJpYXQiOjE1OTIyMjgxNDcsImV4cCI6MTU5MjMxNDU0N30.LQZBu0iWkqC0dy758aXDMtI7RoSDKTcToCutrd8ahZM',
    );

    if (!isNavBarVisible) {
      toogleNavBarVisibility(true);
    }
  }, []);

  return (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={2}
        height={{ sm: '90vh', md: '94vh' }}
      >
        <Box
          d="flex"
          align="center"
          justify="center"
          overflow="scroll"
          padding={2}
        >
          <Authors />
        </Box>
        <Box
          d="flex"
          align="center"
          justify="center"
          overflow="scroll"
          width="1000px"
          padding={2}
        >
          <Notes />
        </Box>
        <Box d="flex" align="center" justify="center" overflow="scroll">
          <Favorites />
        </Box>
      </Grid>
    </>
  );
};

Home.propTypes = {
  isNavBarVisible: bool.isRequired,
  toogleNavBarVisibility: func.isRequired,
};

export default Home;
