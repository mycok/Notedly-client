import React, { useState } from 'react';
import { func } from 'prop-types';
import { useHistory } from 'react-router-dom';

import Header from './Header';

const NavBar = ({ toogleNavBarVisibility }) => {
  const history = useHistory();
  const [, setLogOutStatus] = useState(false);

  const logout = () => {
    localStorage.removeItem('user');
    setLogOutStatus(true);
    history.push('/');
  };

  return (
    <Header logout={logout} toogleNavBarVisibility={toogleNavBarVisibility} />
  );
};

NavBar.propTypes = {
  toogleNavBarVisibility: func.isRequired,
};

export default React.memo(NavBar);
