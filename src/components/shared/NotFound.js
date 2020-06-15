import React from 'react';
import { string } from 'prop-types';
import { Box, Text } from '@chakra-ui/core';

import NotesImage from '../../images/notes.svg';

const NotFound = ({ size }) => (
  <Box mt={{ sm: '30vh', md: '30vh' }} w={size}>
    <Box d="flex" justifyContent="center">
      <NotesImage />
    </Box>
    <Text fontSize="md" fontWeight="md" textAlign="center">
      No Notes Available
    </Text>
  </Box>
);

NotFound.propTypes = {
  size: string,
};

NotFound.defaultProps = {
  size: undefined,
};

export default NotFound;
