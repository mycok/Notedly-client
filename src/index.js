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

const customIcons = {
  favorites: {
    path: (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="heart"
        className="svg-inline--fa fa-heart fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 520 520"
      >
        <path
          fill="currentColor"
          d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
        />
      </svg>
    ),
  },
  notes: {
    path: (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="sticky-note"
        className="svg-inline--fa fa-sticky-note fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z"
        />
      </svg>
    ),
  },
  users: {
    path: (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="users"
        className="svg-inline--fa fa-users fa-w-20"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path
          fill="currentColor"
          d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
        />
      </svg>
    ),
  },
};

const newTheme = {
  ...theme,
  breakpoints,
  icons: {
    ...theme.icons,
    ...customIcons,
  },
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
