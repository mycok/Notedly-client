import React from 'react';
import { func } from 'prop-types';

import Header from './Header';

const NavBar = ({ toogleNavBarVisibility }) => (
  <Header toogleNavBarVisibility={toogleNavBarVisibility} />
);

NavBar.propTypes = {
  toogleNavBarVisibility: func.isRequired,
};

export default React.memo(NavBar);
