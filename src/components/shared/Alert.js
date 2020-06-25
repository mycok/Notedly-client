import React from 'react';
import { string } from 'prop-types';
import { Alert, AlertIcon } from '@chakra-ui/core';

const CustomInputErrorAlert = ({ message }) => (
  <Alert status="error" variant="solid">
    <AlertIcon />
    {message}
  </Alert>
);

CustomInputErrorAlert.propTypes = {
  message: string.isRequired,
};

export default CustomInputErrorAlert;
