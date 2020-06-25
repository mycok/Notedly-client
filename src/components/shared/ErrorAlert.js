import React from 'react';
import { string } from 'prop-types';
import {
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/core';

const ErrorAlert = ({ error }) => (
  <Flex margin="auto">
    <Alert
      status="warning"
      variant="subtle"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      height="200px"
      width="100%"
      bg="none"
    >
      <AlertIcon size="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Error!
      </AlertTitle>
      <AlertDescription maxWidth="sm">{error}</AlertDescription>
    </Alert>
  </Flex>
);

ErrorAlert.propTypes = {
  error: string.isRequired,
};

export default ErrorAlert;
