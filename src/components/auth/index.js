import React, { useEffect, useState } from 'react';
import { instanceOf, bool, func } from 'prop-types';
import { useMutation } from '@apollo/client';
import { Box, Text, Icon } from '@chakra-ui/core';

import { Link } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import { signUpMutation } from '../../graphql/mutations/signup';
import { signInMutation } from '../../graphql/mutations/signin';
import { authenticate } from '../../utils/authHelpers';

const Auth = ({
  location,
  match,
  history,
  isNavBarVisible,
  toogleNavBarVisibility,
}) => {
  const { path } = match;
  const [serverError, setServerError] = useState(null);

  const [signUp, { loading: signingUp }] = useMutation(signUpMutation, {
    ignoreResults: true,
    onCompleted: () => history.push('/auth/signin'),
    onError: (error) => {
      setServerError(error);
    },
  });

  const [signIn, { loading: signingIn }] = useMutation(signInMutation, {
    onCompleted: (data) => {
      authenticate(data, () => {
        if (location.state) {
          history.push(location.state.from.pathname);
        } else {
          history.push('/');
        }
      });
    },
    onError: (error) => {
      setServerError(error);
    },
  });

  useEffect(() => {
    if (isNavBarVisible) {
      toogleNavBarVisibility(false);
    }
  }, [isNavBarVisible]);

  return (
    <Box
      pos="absolute"
      m="auto"
      top="25%"
      left="25%"
      right="25%"
      w="700px"
      borderWidth="1px"
      padding={5}
      rounded="lg"
      bg="#222121"
      borderColor="#1a1a1a"
    >
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={3}>
        {path === '/auth/signup' ? 'Sign Up' : 'Sign In'}
      </Text>
      {path === '/auth/signup' ? (
        <Signup
          loading={signingUp}
          signUp={signUp}
          serverError={serverError}
          setServerError={setServerError}
        />
      ) : (
        <Signin
          loading={signingIn}
          signIn={signIn}
          serverError={serverError}
          setServerError={setServerError}
        />
      )}
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        marginTop={3}
      >
        <Link to="/">
          <Icon name="chevron-left" size="1.5em" focusable cursor="pointer" />
        </Link>
        <Text as="span">
          {path === '/auth/signup'
            ? 'Already have an account?'
            : "Don't have an account?"}
          {' '}
          <Link to={path === '/auth/signup' ? '/auth/signin' : '/auth/signup'}>
            <Text as="span" color="teal.500">
              {path === '/auth/signup' ? 'Sign In' : 'Sign Up'}
            </Text>
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

Auth.propTypes = {
  match: instanceOf(Object).isRequired,
  location: instanceOf(Object).isRequired,
  history: instanceOf(Object).isRequired,
  isNavBarVisible: bool.isRequired,
  toogleNavBarVisibility: func.isRequired,
};

export default Auth;
