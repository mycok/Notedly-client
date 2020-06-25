import React from 'react';
import { func, instanceOf } from 'prop-types';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import { isAuthenticated } from '../../utils/authHelpers';

const NavBar = ({ toogleNavBarVisibility, history }) => {
  const authenticatedUser = isAuthenticated();

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/');
  };

  return (
    <Header
      authenticatedUser={authenticatedUser}
      logout={logout}
      toogleNavBarVisibility={toogleNavBarVisibility}
    />
  );
};

NavBar.propTypes = {
  toogleNavBarVisibility: func.isRequired,
  history: instanceOf(Object).isRequired,
};

export default withRouter(NavBar);
