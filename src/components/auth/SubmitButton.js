import React from 'react';
import { bool, string } from 'prop-types';
import { Button } from '@chakra-ui/core';

const SubmitButton = ({
  areValuesProvided, isLoading, loadingText, title,
}) => (
  <Button
    isFullWidth
    isDisabled={!areValuesProvided}
    isLoading={areValuesProvided && isLoading}
    variantColor="teal"
    loadingText={loadingText}
    variant="solid"
    m="auto"
  >
    {title}
  </Button>
);

SubmitButton.propTypes = {
  areValuesProvided: bool.isRequired,
  isLoading: bool.isRequired,
  loadingText: string.isRequired,
  title: string.isRequired,
};

export default SubmitButton;
