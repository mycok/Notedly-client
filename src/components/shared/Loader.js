import React from 'react';
import { string } from 'prop-types';
import ContentLoader from 'react-content-loader';

const UserLoader = ({ backgroundColor }, props) => (
  <ContentLoader
    viewBox="0 0 400 600"
    height="100%"
    width="100%"
    speed={0}
    gradientRatio={0.1}
    backgroundColor={backgroundColor}
    foregroundColor="#1a1a1a"
    {...props}
  >
    <rect x="198" y="21" rx="3" ry="3" width="185" height="7" />
    <rect x="110" y="41" rx="4" ry="4" width="272" height="6" />
    <circle cx="48" cy="30" r="20" />

    <rect x="198" y="168" rx="3" ry="3" width="185" height="7" />
    <rect x="110" y="190" rx="4" ry="4" width="272" height="6" />
    <circle cx="48" cy="180" r="20" />

    <rect x="198" y="290" rx="3" ry="3" width="185" height="7" />
    <rect x="110" y="320" rx="4" ry="4" width="272" height="6" />
    <circle cx="48" cy="310" r="20" />
  </ContentLoader>
);

const NotesLoader = ({ backgroundColor }, props) => (
  <ContentLoader
    viewBox="0 0 1000 600"
    height="100%"
    width="100%"
    gradientRatio={0.1}
    backgroundColor={backgroundColor}
    foregroundColor="#1a1a1a"
    speed={0}
    {...props}
  >
    <circle cx="20.2" cy="30.2" r="12.3" />
    <rect x="800.9" y="29.5" width="200.5" height="12" />
    <rect x="0" y="64.7" width="100%" height="17" />
    <rect x="0" y="97.8" width="100%" height="17" />
    <rect x="0" y="132.3" width="100%" height="17" />

    <circle cx="20.2" cy="200.2" r="12.3" />
    <rect x="800.9" y="199.5" width="200.5" height="12" />
    <rect x="0" y="235.7" width="100%" height="17" />
    <rect x="0" y="268.8" width="100%" height="17" />
    <rect x="0" y="302.3" width="100%" height="17" />

    <circle cx="20.2" cy="400.2" r="12.3" />
    <rect x="800.9" y="400.5" width="200.5" height="12" />
    <rect x="0" y="435.7" width="100%" height="17" />
    <rect x="0" y="468.8" width="100%" height="17" />
    <rect x="0" y="502.3" width="100%" height="17" />
  </ContentLoader>
);

UserLoader.propTypes = {
  backgroundColor: string,
};

UserLoader.defaultProps = {
  backgroundColor: '#1a1a1a',
};

NotesLoader.propTypes = {
  backgroundColor: string,
};

NotesLoader.defaultProps = {
  backgroundColor: '#1a1a1a',
};

export { UserLoader, NotesLoader };
