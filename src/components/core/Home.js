import React from 'react';
import { Grid, Box } from '@chakra-ui/core';

import Authors from '../author/Authors';
import Favorites from '../Note/Favorites';
import Notes from '../Note/Notes';

const Home = () => {
  React.useEffect(() => {
    localStorage.setItem(
      'jwt',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWNlZjExMTMwOTljZTE5NjBhMDA2MTIiLCJpYXQiOjE1OTE2ODg4NDksImV4cCI6MTU5MTc3NTI0OX0.ZaeyhlXIFkvTGIXJy-bgWHybEjjvUUETdtO_zvSt6Us',
    );
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

export default Home;
