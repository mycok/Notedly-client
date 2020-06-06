import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Box } from '@chakra-ui/core';

import Authors from '../author/Authors';
import Favorites from '../Note/Favorites';
import Home from '../core/Home';
import MyNotes from '../Note/MyNotes';
import Note from '../Note/Note';
import Header from '../core/Header';

const Layout = () => {
  const { pathname } = useLocation();
  const noteId = pathname.split('/')[2];

  React.useEffect(() => {
    localStorage.setItem(
      'jwt',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWNlZjExMTMwOTljZTE5NjBhMDA2MTIiLCJpYXQiOjE1OTE0MzgyMzIsImV4cCI6MTU5MTUyNDYzMn0.OQIuJx9tlY2tvcTOPgshuIIYoC55RGVZEpyNBddabHY',
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
          bg="#03273f"
          padding={2}
          borderWidth="1px"
          rounded="lg"
        >
          <Authors />
        </Box>
        <Box
          d="flex"
          align="center"
          justify="center"
          overflow="scroll"
          bg="gray.600"
          width="1000px"
          padding={2}
          borderWidth="1px"
          rounded="lg"
        >
          {renderRoute()}
        </Box>
        <Box
          d="flex"
          align="center"
          justify="center"
          overflow="scroll"
          bg="gray.400"
          borderWidth="1px"
          rounded="lg"
        >
          <Favorites />
        </Box>
      </Grid>
    </>
  );
};

export default Layout;
