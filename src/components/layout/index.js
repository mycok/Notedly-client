import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Flex } from '@chakra-ui/core';

import Authors from '../author/Authors';
import Header from '../core/Header';
import Favorites from '../Note/Favorites';
import Home from '../core/Home';
import MyNotes from '../Note/MyNotes';
import Note from '../Note/Note';

const Layout = () => {
  const { pathname } = useLocation();
  const noteId = pathname.split('/')[2];

  React.useEffect(() => {
    localStorage.setItem(
      'jwt',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWNhZTdkNjI1YWM5YzI5NWFhN2QxY2MiLCJpYXQiOjE1OTA1Mzc2NzIsImV4cCI6MTU5MDYyNDA3Mn0.ITtrgJ-LSaj-vpVWknb9i-lZo2lQj_n7sfSn6qaAqcQ',
    );
  }, []);

  const renderRoute = () => {
    switch (pathname) {
      case '/my-notes':
        return <MyNotes />;
      case `/note/${noteId}`:
        return <Note />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header />
      <Grid templateColumns="repeat(3, 1fr)" columnGap={4} w="100vw">
        <Flex
          bg="blue.900"
          align="baseline"
          justify="center"
          h="94vh"
          overflow="scroll"
        >
          <Authors />
        </Flex>
        <Flex align="baseline" justify="center" h="94vh" overflow="scroll">
          {renderRoute()}
        </Flex>
        <Flex
          bg="blue.100"
          align="baseline"
          justify="center"
          h="94vh"
          overflow="scroll"
        >
          <Favorites />
        </Flex>
      </Grid>
    </>
  );
};

export default Layout;
