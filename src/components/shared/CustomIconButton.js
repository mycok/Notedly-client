import React from 'react';
import { string, func } from 'prop-types';
import { Tooltip, IconButton } from '@chakra-ui/core';

const CustomIconButton = ({ icon, label, handler }, props) => (
  <Tooltip label={label} placement="bottom" bg="#222121" closeOnClick>
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
      onClick={handler}
      {...props}
    />
  </Tooltip>
);

CustomIconButton.propTypes = {
  icon: string.isRequired,
  label: string.isRequired,
  handler: func,
};

CustomIconButton.defaultProps = {
  handler: () => null,
};
export default CustomIconButton;
