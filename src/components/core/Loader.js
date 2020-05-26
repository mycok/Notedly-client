import React from 'react';
import { instanceOf } from 'prop-types';
import { Skeleton } from '@chakra-ui/core';

const Loader = ({ children }) => <Skeleton>{children}</Skeleton>;

Loader.propTypes = {
  children: instanceOf(Array).isRequired,
};

export default Loader;
