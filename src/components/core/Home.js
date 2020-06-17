import React from 'react';
import { bool, func } from 'prop-types';
import { Grid, Box } from '@chakra-ui/core';

import Authors from '../author/Authors';
import Favorites from '../Note/Favorites';
import Notes from '../Note/Notes';

const Home = ({ isNavBarVisible, toogleNavBarVisibility }) => {
  React.useEffect(() => {
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
