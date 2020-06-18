import React from 'react';
import { instanceOf, func } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../utils/authHelpers';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/auth/signin',
          state: { from: props.location },
        }}
      />
    ))}
  />
);

ProtectedRoute.propTypes = {
  component: func.isRequired,
  location: instanceOf(Object),
};

ProtectedRoute.defaultProps = {
  location: undefined,
};

export default ProtectedRoute;
