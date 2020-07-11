import React from 'react';
import { string } from 'prop-types';
import { Tooltip, IconButton } from '@chakra-ui/core';

const CustomIconButton = ({ icon, label }, props) => (
  <Tooltip hasArrow label={label} placement="bottom" bg="#222121">
    <IconButton
      aria-label={label}
      icon={icon}
      color="white.800"
      isRound
      size="sm"
      variant="outline"
      borderWidth="2px"
      borderColor="teal.800"
      mr={5}
      _hover={{ bg: '#3b4048' }}
      _focus={{ outline: '#fff' }}
      {...props}
    />
  </Tooltip>
);

CustomIconButton.propTypes = {
  icon: string.isRequired,
  label: string.isRequired,
};

export default CustomIconButton;
