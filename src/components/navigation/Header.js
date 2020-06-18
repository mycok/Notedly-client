import React from 'react';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Image, Flex, IconButton, Button, Stack,
} from '@chakra-ui/core';

import logo from 'url:../../images/logo.png';
import MenuItems from './MenuItems';

import { isAuthenticated } from '../../utils/authHelpers';

const Header = ({ toogleNavBarVisibility }, props) => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
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
      <Link to="/">
        <Image src={logo} alt="Notedly" />
      </Link>
    </Flex>

    <Flex>
      <Stack isInline spacing={8}>
        <IconButton
          aria-label="favorites"
          icon="favorites"
          color="white.800"
          size="sm"
          isRound
          variant="outline"
          borderColor="teal.800"
        />
        <IconButton
          aria-label="favorites"
          icon="notes"
          color="white.800"
          size="sm"
          isRound
          variant="outline"
          borderColor="teal.800"
        />
      </Stack>
    </Flex>

    <Flex width={{ sm: 'full', md: 'auto' }} mr={5} justify="flex-end">
      <>
        {!isAuthenticated() && (
          <>
            <Link to="/auth/signup" style={{ marginRight: '1em' }}>
              <Button
                variantColor="teal"
                variant="outline"
                size="md"
                onClick={() => toogleNavBarVisibility(false)}
              >
                SignUp
              </Button>
            </Link>
            <Link to="/auth/signin" style={{ marginRight: '1em' }}>
              <Button
                variantColor="teal"
                variant="outline"
                size="md"
                onClick={() => toogleNavBarVisibility(false)}
              >
                Login
              </Button>
            </Link>
          </>
        )}
        <MenuItems />
      </>
    </Flex>
  </Flex>
);

Header.propTypes = {
  toogleNavBarVisibility: func.isRequired,
};

export default Header;
