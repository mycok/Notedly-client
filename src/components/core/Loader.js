import React from 'react';
import ContentLoader from 'react-content-loader';

const UserLoader = (props) => (
  <ContentLoader
    viewBox="0 0 400 160"
    height="100%"
    width="100%"
    speed={1}
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
    viewBox="0 0 1000 900"
    height="100%"
    width="100%"
    gradientRatio={0.1}
    backgroundColor="#222121"
    foregroundColor="#999"
    speed={1}
    {...props}
  >
    <circle cx="20.2" cy="30.2" r="12.3" />
    <rect x="800.9" y="29.5" width="200.5" height="8" />
    <rect x="0" y="64.7" width="100%" height="17" />
    <rect x="0" y="97.8" width="100%" height="17" />
    <rect x="0" y="132.3" width="100%" height="17" />

    <circle cx="20.2" cy="200.2" r="12.3" />
    <rect x="800.9" y="199.5" width="200.5" height="8" />
    <rect x="0" y="235.7" width="100%" height="17" />
    <rect x="0" y="268.8" width="100%" height="17" />
    <rect x="0" y="302.3" width="100%" height="17" />

    <circle cx="20.2" cy="400.2" r="12.3" />
    <rect x="800.9" y="400.5" width="200.5" height="8" />
    <rect x="0" y="435.7" width="100%" height="17" />
    <rect x="0" y="468.8" width="100%" height="17" />
    <rect x="0" y="502.3" width="100%" height="17" />
  </ContentLoader>
);

export { UserLoader, NotesLoader };
