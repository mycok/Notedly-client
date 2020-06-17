import React, { useEffect } from 'react';
import { instanceOf, bool, func } from 'prop-types';
import { useMutation } from '@apollo/client';
import { Box, Text, Icon } from '@chakra-ui/core';

import { Link } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import { signUpMutation } from '../../graphql/mutations/signup';
import { signInMutation } from '../../graphql/mutations/signin';
// TODO:
// - implement server error handling when signing up or logging in
const Auth = ({
  match, history, isNavBarVisible, toogleNavBarVisibility,
}) => {
  const { path } = match;

  const [signUp, { loading: signingUp }] = useMutation(signUpMutation, {
    ignoreResults: true,
    onCompleted: () => history.push('/auth/login'),
  });

  const [signIn, { loading: signingIn }] = useMutation(signInMutation, {
    onCompleted: (data) => {
      localStorage.setItem('user', JSON.stringify(data.signIn));
      history.push('/');
    },
  });

  useEffect(() => {
    if (isNavBarVisible) {
      toogleNavBarVisibility(false);
    }
  });

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
      bg="#fff"
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        color="gray.800"
        mb={3}
      >
        {path === '/auth/signup' ? 'SignUp' : 'Login'}
      </Text>
      {path === '/auth/signup' ? (
        <Signup loading={signingUp} signUp={signUp} />
      ) : (
        <Signin loading={signingIn} signIn={signIn} />
      )}
      <Box
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        marginTop={3}
      >
        <Link to="/">
          <Icon
            name="chevron-left"
            color="teal.900"
            size="1.5em"
            focusable
            cursor="pointer"
          />
        </Link>
        <Text as="span" color="teal.900">
          {path === '/auth/signup'
            ? 'Already have an account?'
            : "Don't have an account?"}
          {' '}
          <Link to={path === '/auth/signup' ? '/auth/login' : '/auth/signup'}>
            <Text as="span" color="teal.500">
              {path === '/auth/signup' ? 'Login' : 'Signup'}
            </Text>
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

Auth.propTypes = {
  match: instanceOf(Object).isRequired,
  history: instanceOf(Object).isRequired,
  isNavBarVisible: bool.isRequired,
  toogleNavBarVisibility: func.isRequired,
};

export default Auth;
