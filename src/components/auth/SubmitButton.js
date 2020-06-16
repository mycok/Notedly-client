import React from 'react';
import { bool, string, func } from 'prop-types';
import { Button } from '@chakra-ui/core';

const SubmitButton = ({
  areValuesProvided,
  isLoading,
  loadingText,
  title,
  handleSubmit,
}) => (
  <Button
    isFullWidth
    isDisabled={!areValuesProvided}
    isLoading={areValuesProvided && isLoading}
    variantColor="teal"
    loadingText={loadingText}
    variant="solid"
    m="auto"
    onClick={handleSubmit}
  >
    {title}
  </Button>
);

SubmitButton.propTypes = {
  areValuesProvided: bool.isRequired,
  isLoading: bool.isRequired,
  loadingText: string.isRequired,
  title: string.isRequired,
  handleSubmit: func.isRequired,
};

export default SubmitButton;
