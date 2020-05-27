import React from 'react';
import { Box, Text } from '@chakra-ui/core';

import NotesImage from '../../images/notes.svg';

const NotFound = () => (
  <Box mt={{ sm: '60%', md: '50%' }}>
    <NotesImage />
    <Text fontSize="md" fontWeight="md" textAlign="center">
      No Notes Available
    </Text>
  </Box>
);

export default NotFound;
