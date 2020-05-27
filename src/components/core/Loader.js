import React from 'react';
import ContentLoader from 'react-content-loader';

const UserLoader = (props) => (
  <ContentLoader
    viewBox="0 0 400 160"
    height="100%"
    width="100%"
    speed={2}
    {...props}
  >
    <rect x="110" y="21" rx="4" ry="4" width="254" height="6" />
    <rect x="111" y="41" rx="3" ry="3" width="185" height="7" />
    <rect x="304" y="-46" rx="3" ry="3" width="350" height="6" />
    <rect x="371" y="-45" rx="3" ry="3" width="380" height="6" />
    <rect x="484" y="-45" rx="3" ry="3" width="201" height="6" />
    <circle cx="48" cy="48" r="48" />
  </ContentLoader>
);

const NotesLoader = (props) => (
  <ContentLoader
    viewBox="0 0 500 475"
    height="100%"
    width="100%"
    speed={2}
    {...props}
  >
    <circle cx="70.2" cy="73.2" r="41.3" />
    <rect x="129.9" y="29.5" width="125.5" height="17" />
    <rect x="129.9" y="64.7" width="296" height="17" />
    <rect x="129.9" y="97.8" width="253.5" height="17" />
    <rect x="129.9" y="132.3" width="212.5" height="17" />

    <circle cx="70.7" cy="243.5" r="41.3" />
    <rect x="130.4" y="199.9" width="125.5" height="17" />
    <rect x="130.4" y="235" width="296" height="17" />
    <rect x="130.4" y="268.2" width="253.5" height="17" />
    <rect x="130.4" y="302.6" width="212.5" height="17" />

    <circle cx="70.7" cy="412.7" r="41.3" />
    <rect x="130.4" y="369" width="125.5" height="17" />
    <rect x="130.4" y="404.2" width="296" height="17" />
    <rect x="130.4" y="437.3" width="253.5" height="17" />
    <rect x="130.4" y="471.8" width="212.5" height="17" />
  </ContentLoader>
);

export { UserLoader, NotesLoader };
