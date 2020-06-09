import React from 'react';
import { Link } from 'react-router-dom';
import {
  Image,
  Flex,
  Menu,
  Icon,
  IconButton,
  Button,
  Stack,
  ButtonGroup,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Avatar,
} from '@chakra-ui/core';

import logo from 'url:../../images/logo.png';

const MenuItems = () => (
  <Menu>
    <MenuButton as="div" color="gray.700" size="sm">
      <Avatar size="sm" name="Michael Kibuuka" />
      <Icon name="chevron-down" />
    </MenuButton>
    <MenuList
      bg="#222121"
      width={['100%', '50%', '25%', '15%']}
      borderColor="#1a1a1a"
    >
      <MenuGroup>
        <MenuItem onClick={() => null}>SignOut</MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
);

const Header = (props) => (
  <Flex
    as="nav"
    flex={1}
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
      <Image src={logo} alt="Notedly" />
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
        <Button variantColor="teal" variant="outline" size="sm">
          <Link to="/auth/signup">SignUp</Link>
        </Button>
        <Button variantColor="teal" variant="outline" size="sm">
          Login
        </Button>
      </ButtonGroup>
      <MenuItems />
    </Flex>
  </Flex>
);

export default React.memo(Header);
