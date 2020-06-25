import React, { Component } from 'react';
import { instanceOf } from 'prop-types';

import ErrorAlert from './ErrorAlert';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) return <ErrorAlert error={error} />;
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: instanceOf(Object).isRequired,
};

export default ErrorBoundary;
