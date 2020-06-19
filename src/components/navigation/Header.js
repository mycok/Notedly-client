import React from 'react';
import { func } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Image,
  Flex,
  IconButton,
  Button,
  Link,
  Stack,
  Box,
} from '@chakra-ui/core';

import logo from 'url:../../images/logo.png';
import MenuItems from './MenuItems';

import { isAuthenticated } from '../../utils/authHelpers';

const Header = ({ toogleNavBarVisibility, logout }, props) => {
  const authenticatedUser = isAuthenticated();
  return (
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

      <Box />

      <Box width="200px">
        <Stack
          direction="row"
          spacing={10}
          align="center"
          justify="space-between"
        >
          {authenticatedUser && (
            <>
              <Link as={RouterLink} to="/my-favorites">
                <IconButton
                  aria-label="favorites"
                  icon="favorites"
                  color="white.800"
                  size="sm"
                  isRound
                  variant="outline"
                  borderWidth="1"
                  borderColor="teal.800"
                  _hover={{ bg: '#3b4048' }}
                />
              </Link>
              <Link as={RouterLink} to="/my-notes">
                <IconButton
                  aria-label="favorites"
                  icon="notes"
                  color="white.800"
                  size="sm"
                  isRound
                  variant="outline"
                  borderWidth="1px"
                  borderColor="teal.800"
                  _hover={{ bg: '#3b4048' }}
                />
              </Link>
            </>
          )}
          <Link as={RouterLink} to="/authors">
            <IconButton
              aria-label="authors"
              icon="users"
              color="white.800"
              size="sm"
              isRound
              variant="outline"
              borderWidth="1px"
              borderColor="teal.800"
              _hover={{ bg: '#3b4048' }}
            />
          </Link>
        </Stack>
      </Box>

      <Box />

      <Flex width={{ sm: 'full', md: 'auto' }} mr={5} justify="flex-end">
        {authenticatedUser ? (
          <MenuItems
            username={authenticatedUser.user.username}
            logout={logout}
          />
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
};

Header.propTypes = {
  logout: func.isRequired,
  toogleNavBarVisibility: func.isRequired,
};

export default Header;
