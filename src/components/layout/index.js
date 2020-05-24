import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../Header';
import Navigation from '../Navigation';

const Wrapper = styled.div`
  @media (min-width: 700px) {
    display: flex;
    top: 0px;
    position: relative;
    height: calc(100% - 64px);
    width: 100%
    flex: auto;
    flex-direction: column;
    background-color: orange;
  }
`;

const Main = styled.main`
  position: fixed;
  height: calc(100% - 185px);
  width: 100%;
  padding: 1em;
  overflow-y: scroll;
  background-color: gray;
  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Wrapper>
      <Navigation />
      <Main>{children}</Main>
    </Wrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.symbol])
    .isRequired,
};

export default Layout;
