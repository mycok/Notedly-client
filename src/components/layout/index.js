import React from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Grid, Flex } from '@chakra-ui/core';

import Authors from '../author/Authors';
import Header from '../core/Header';
import Favorites from '../Note/Favorites';
import Home from '../core/Home';
import MyNotes from '../Note/MyNotes';

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <Grid
        templateColumns="repeat(auto-fit, minmax(100px, 1fr))"
        columnGap={4}
        w="100%"
      >
        <Flex bg="blue.900" align="baseline" justify="center">
          <Authors />
        </Flex>
        <Flex bg="blue.500" align="baseline" justify="center">
          {pathname === '/my-notes' ? <MyNotes /> : <Home />}
        </Flex>
        <Flex bg="blue.100" align="baseline" justify="center">
          <Favorites />
        </Flex>
      </Grid>
    </>
  );
};

// Layout.propTypes = {
//   children: PropTypes.oneOfType([PropTypes.object, PropTypes.symbol])
//     .isRequired,
// };

export default Layout;
