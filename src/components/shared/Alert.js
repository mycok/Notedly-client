import React from 'react';
import { string } from 'prop-types';
import { Alert, AlertIcon } from '@chakra-ui/core';

const CustomAlert = ({ message }) => (
  <Alert status="error" variant="solid">
    <AlertIcon />
    {message}
  </Alert>
);

CustomAlert.propTypes = {
  message: string.isRequired,
};

export default CustomAlert;
