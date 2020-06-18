import React from 'react';
import { string, func } from 'prop-types';
import {
  Menu,
  MenuButton,
  Avatar,
  Icon,
  MenuList,
  MenuGroup,
  MenuItem,
} from '@chakra-ui/core';

const MenuItems = ({ username, logout }) => (
  <Menu>
    <MenuButton as="div" color="gray.700" size="sm">
      <Avatar size="sm" name={username} />
      <Icon name="chevron-down" />
    </MenuButton>
    <MenuList
      bg="#222121"
      width={['100%', '50%', '25%', '15%']}
      borderColor="#1a1a1a"
    >
      <MenuGroup>
        <MenuItem _focus={{ bg: '#3b4048' }} onClick={logout}>
          SignOut
        </MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
);

MenuItems.propTypes = {
  username: string.isRequired,
  logout: func.isRequired,
};

export default MenuItems;
