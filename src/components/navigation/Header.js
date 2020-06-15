import React from 'react';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Image,
  Flex,
  IconButton,
  Button,
  Stack,
  ButtonGroup,
} from '@chakra-ui/core';

import logo from 'url:../../images/logo.png';
import MenuItems from './MenuItems';

// TODO
// - implement back to home navigation by clicking on the logo
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
      <ButtonGroup mr={8} spacing={4}>
        <Button
          variantColor="teal"
          variant="outline"
          size="sm"
          onClick={() => toogleNavBarVisibility(false)}
        >
          <Link to="/auth/signup">SignUp</Link>
        </Button>
        <Button
          variantColor="teal"
          variant="outline"
          size="sm"
          onClick={() => toogleNavBarVisibility(false)}
        >
          Login
        </Button>
      </ButtonGroup>
      <MenuItems />
    </Flex>
  </Flex>
);

Header.propTypes = {
  toogleNavBarVisibility: func.isRequired,
};

export default Header;
