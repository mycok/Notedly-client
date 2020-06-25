import React from 'react';
import { func, instanceOf } from 'prop-types';

const GraphqlErrorHandler = ({ err, ErrComponent }) => {
  if (err.networkError) {
    return (
      <ErrComponent
        error={err.networkError.result.errors[0].message.split(':')[1]}
      />
    );
  }
  return <ErrComponent error={err.graphQLErrors[0].message} />;
};

GraphqlErrorHandler.propTypes = {
  err: instanceOf(Object).isRequired,
  ErrComponent: func.isRequired,
};

export default GraphqlErrorHandler;
