import React from 'react';
import { func, bool, oneOfType } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Image,
  Flex,
  IconButton,
  Button,
  Link,
  Stack,
  Box,
  Tooltip,
} from '@chakra-ui/core';

import logo from 'url:../../images/logo.png';
import MenuItems from './MenuItems';

const Header = (
  { toogleNavBarVisibility, authenticatedUser, logout },
  props,
) => (
  <Flex
    as="nav"
    align="center"
    justify="space-around"
    padding="0.8rem"
    color="#fff"
    bg="#222121"
    zIndex={1}
    top={0}
    pos="sticky"
    h={{ sm: '10vh', md: '6vh' }}
    w="100vw"
    {...props}
  >
    <Flex align="center" mr={5} justify="flex-start">
      <RouterLink to="/">
        <Image src={logo} alt="Notedly" />
      </RouterLink>
    </Flex>

    <Flex width="20px" />

    <Box width={authenticatedUser ? '400px' : 0}>
      <Stack
        direction="row"
        spacing={10}
        align="center"
        justify="space-between"
      >
        {authenticatedUser && (
          <>
            <Link as={RouterLink} to="/my-favorites">
              <Tooltip label="My Favorites" placement="bottom" bg="#222121">
                <IconButton
                  aria-label="favorites"
                  icon="favorites"
                  size="sm"
                  isRound
                  variant="outline"
                  borderWidth="2px"
                  borderColor="teal.800"
                  _hover={{ bg: '#3b4048' }}
                  _focus={{ borderColor: '#ffffff' }}
                />
              </Tooltip>
            </Link>
            <Link as={RouterLink} to="/my-notes">
              <Tooltip label="My Notes" placement="bottom" bg="#222121">
                <IconButton
                  aria-label="notes"
                  icon="notes"
                  color="white.800"
                  size="sm"
                  isRound
                  variant="outline"
                  borderWidth="2px"
                  borderColor="teal.800"
                  _hover={{ bg: '#3b4048' }}
                  _focus={{ borderColor: '#ffffff' }}
                />
              </Tooltip>
            </Link>
          </>
        )}
        <Link as={RouterLink} to="/authors">
          <Tooltip label="Authors" placement="bottom" bg="#222121">
            <IconButton
              aria-label="authors"
              icon="users"
              color="white.800"
              size="sm"
              isRound
              variant="outline"
              borderWidth="2px"
              borderColor="teal.800"
              _hover={{ bg: '#3b4048' }}
              _focus={{ borderColor: '#ffffff' }}
            />
          </Tooltip>
        </Link>
      </Stack>
    </Box>

    <Flex width="140px" />

    <Flex width={{ sm: 'full', md: 'auto' }} mr={5} justify="flex-end">
      {authenticatedUser ? (
        <MenuItems username={authenticatedUser.user.username} logout={logout} />
      ) : (
        <>
          <RouterLink to="/auth/signup" style={{ marginRight: '1em' }}>
            <Button
              variantColor="teal"
              variant="outline"
              size="sm"
              _hover={{ bg: '#3b4048' }}
              onClick={() => toogleNavBarVisibility(false)}
            >
              SignUp
            </Button>
          </RouterLink>
          <RouterLink to="/auth/signin" style={{ marginRight: '1em' }}>
            <Button
              variantColor="teal"
              variant="outline"
              _hover={{ bg: '#3b4048' }}
              size="sm"
              onClick={() => toogleNavBarVisibility(false)}
            >
              Login
            </Button>
          </RouterLink>
        </>
      )}
    </Flex>
  </Flex>
);

Header.propTypes = {
  authenticatedUser: oneOfType([Object, bool]).isRequired,
  logout: func.isRequired,
  toogleNavBarVisibility: func.isRequired,
};

export default Header;
