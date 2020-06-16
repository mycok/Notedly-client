import React, { useState, useEffect } from 'react';
import { instanceOf, bool, func } from 'prop-types';
import { Box, Text, Icon } from '@chakra-ui/core';

import { Link } from 'react-router-dom';
import SubmitButton from './SubmitButton';
import Signup from './Signup';
import { authValidation } from '../../utils/validation';

const Auth = ({ match, isNavBarVisible, toogleNavBarVisibility }) => {
  const { path } = match;
  const [authState, setAuthState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isLoading] = useState(false);
  const [areValuesProvided, setValuesProvided] = useState(false);
  //   const [serverErrors, setServerErrors] = useState([]);
  const [inputErrors, setInputErrors] = useState({});

  const handleOnChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setAuthState((prevAuthState) => ({ ...prevAuthState, [name]: value }));
  };

  const handleSubmit = () => {
    const validationErrors = authValidation(
      authState.username,
      authState.email,
      authState.password,
    );
    if (
      validationErrors.username
      || validationErrors.email
      || validationErrors.password
    ) {
      setInputErrors(validationErrors);
    }
  };

  useEffect(() => {
    const { username, email, password } = authState;
    if (username && email && password) {
      setValuesProvided(true);
    } else {
      setValuesProvided(false);
    }
  }, [authState]);

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
        <Signup
          authState={authState}
          inputErrors={inputErrors}
          isPasswordVisible={isPasswordVisible}
          setPasswordVisibility={setPasswordVisibility}
          handleOnChange={handleOnChange}
        />
      ) : (
        <p style={{ textAlign: 'center', color: '#000' }}>
          This should be the login page
        </p>
      )}
      <SubmitButton
        loadingText={
          path === '/auth/signup' ? '...signing up...' : '...loging in...'
        }
        title={path === '/auth/signup' ? 'SignUp' : 'Login'}
        isLoading={isLoading}
        areValuesProvided={areValuesProvided}
        handleSubmit={handleSubmit}
      />
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
  isNavBarVisible: bool.isRequired,
  toogleNavBarVisibility: func.isRequired,
};

export default Auth;
