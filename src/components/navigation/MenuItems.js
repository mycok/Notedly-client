import React from 'react';
import {
  Menu,
  MenuButton,
  Avatar,
  Icon,
  MenuList,
  MenuGroup,
  MenuItem,
} from '@chakra-ui/core';

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

export default MenuItems;
