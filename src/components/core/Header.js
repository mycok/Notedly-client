import React from 'react';
import { Link } from 'react-router-dom';
import {
  Image,
  Flex,
  Menu,
  Icon,
  Button,
  ButtonGroup,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Avatar,
} from '@chakra-ui/core';

import logo from 'url:../../images/logo.png';

const MenuItems = () => (
  <Menu>
    <MenuButton as="div" color="gray.700" size="sm">
      <Avatar size="sm" name="Michael Kibuuka" />
      <Icon name="chevron-down" />
    </MenuButton>
    <MenuList bg="gray.800" width={['100%', '50%', '25%', '15%']}>
      <MenuGroup>
        <MenuItem>
          <Link to="/my-notes">My Notes</Link>
        </MenuItem>
      </MenuGroup>
      <MenuDivider borderColor="#000" />
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
    bg="gray.800"
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

    <Flex />

    <Flex width={{ sm: 'full', md: 'auto' }} mr={5} justify="flex-end">
      <ButtonGroup mr={8} spacing={4}>
        <Button variantColor="teal" variant="outline" size="sm">
          SignUp
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
