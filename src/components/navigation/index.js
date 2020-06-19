import React from 'react';
import { func, instanceOf } from 'prop-types';
import { withRouter } from 'react-router-dom';

import Header from './Header';

const NavBar = ({ toogleNavBarVisibility, history }) => {
  const logout = () => {
    localStorage.removeItem('user');
    history.push('/');
  };

  return (
    <Header logout={logout} toogleNavBarVisibility={toogleNavBarVisibility} />
  );
};

NavBar.propTypes = {
  toogleNavBarVisibility: func.isRequired,
  history: instanceOf(Object).isRequired,
};

export default React.memo(withRouter(NavBar));
