import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { theme, ThemeProvider, CSSReset } from '@chakra-ui/core';

import App from './App';
import { client } from './graphql';
import './styles/index.css';

const breakpoints = ['360px', '768px', '1024px', '1440px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints,
};

ReactDOM.render(
  <>
    <ThemeProvider theme={newTheme}>
      <ApolloProvider client={client}>
        <CSSReset />
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
