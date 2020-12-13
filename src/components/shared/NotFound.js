import React from 'react';
import { string, any } from 'prop-types';
import { Box, Text } from '@chakra-ui/core';

const NotFound = ({ size, NotFoundComp, text }) => (
  <Box mt={{ sm: '30vh', md: '30vh' }} w={size}>
    <Box d="flex" justifyContent="center">
      <NotFoundComp />
    </Box>
    <Text fontSize="md" fontWeight="md" textAlign="center">
      {text}
    </Text>
  </Box>
);

NotFound.propTypes = {
  size: string,
  NotFoundComp: any.isRequired,
  text: string.isRequired,
};

NotFound.defaultProps = {
  size: 'auto',
};

export default NotFound;
