import React from 'react';
import { Link } from 'react-router-dom';
// import { instanceOf } from 'prop-types';
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
    <MenuButton
      as="div"
      // rightIcon="chevron-down"
      color="gray.700"
      size="sm"
    >
      <Avatar size="sm" name="Michael Kibuuka" />
      <Icon name="chevron-down" />
    </MenuButton>
    <MenuList bg="#fff" color="#000" width={['100%', '50%', '25%', '15%']}>
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
    flex="1"
    direction="row"
    align="center"
    justify="space-between"
    padding="0.8rem"
    bg="gray.700"
    color="white"
    {...props}
  >
    <Flex align="center" mr={5} height="15px" justify="flex-start">
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

// MenuItems.propTypes = {
//   children: instanceOf(Array).isRequired,
// };

export default Header;
