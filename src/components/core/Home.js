import React from 'react';
import { bool, func } from 'prop-types';
import { Grid, Box } from '@chakra-ui/core';

import Notes from '../note/Notes';

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
        <Box />
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
        <Box />
      </Grid>
    </>
  );
};

Home.propTypes = {
  isNavBarVisible: bool.isRequired,
  toogleNavBarVisibility: func.isRequired,
};

export default Home;
