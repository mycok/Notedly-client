import React, { useState, useEffect } from 'react';
import {
  bool, func, instanceOf, any,
} from 'prop-types';
import {
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Stack,
  Box,
} from '@chakra-ui/core';

import SubmitButton from './SubmitButton';
import CustomAlert from '../shared/Alert';
import { authValidation } from '../../utils/validation';

const Signin = ({
  loading, signIn, serverError, setServerError,
}) => {
  const [signinState, setSigninState] = useState({
    email: '',
    password: '',
  });

  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [areValuesProvided, setValuesProvided] = useState(false);
  const [inputErrors, setInputErrors] = useState({});

  const handleOnChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setSigninState((prevSigninState) => ({
      ...prevSigninState,
      [name]: value,
    }));

    if (serverError) {
      setServerError(null);
    }
  };

  const handleSignIn = () => {
    const validationErrors = authValidation(
      signinState.email,
      signinState.password,
    );
    if (validationErrors.email || validationErrors.password) {
      setInputErrors(validationErrors);
    } else {
      signIn({ variables: { ...signinState } });
    }
  };

  useEffect(() => {
    const { email, password } = signinState;

    if (email && password) {
      setValuesProvided(true);
    } else {
      setValuesProvided(false);
    }

    if (Object.values(inputErrors).length > 0) {
      setInputErrors({});
    }
  }, [signinState]);

  useEffect(() => {
    setServerError(null);
  }, []);

  return (
    <>
      <Box mb={3}>
        {serverError && (
          <CustomAlert message={serverError.graphQLErrors[0].message} />
        )}
      </Box>
      <FormControl mb={5}>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement>
              <Icon name="email" color="green.800" />
            </InputLeftElement>
            <Input
              name="email"
              isRequired
              type="email"
              placeholder="Enter email....."
              value={signinState.email}
              isInvalid={Object.values(inputErrors).length > 0}
              focusBorderColor="clear"
              errorBorderColor={inputErrors.email ? 'red.300' : 'clear'}
              color="#000000"
              onChange={handleOnChange}
            />
          </InputGroup>
          {inputErrors.email && (
            <FormHelperText m={0} color="red.500">
              <Icon name="warning" />
              {' '}
              {inputErrors.email}
            </FormHelperText>
          )}

          <InputGroup>
            <InputLeftElement>
              <Icon name="lock" color="green.800" />
            </InputLeftElement>
            <Input
              name="password"
              isRequired
              type={isPasswordVisible ? '' : 'password'}
              placeholder="Enter password....."
              value={signinState.password}
              isInvalid={Object.values(inputErrors).length > 0}
              focusBorderColor="clear"
              errorBorderColor={inputErrors.password ? 'red.300' : 'clear'}
              color="#000000"
              onChange={handleOnChange}
            />
            <InputRightElement>
              <Icon
                onClick={() => setPasswordVisibility(!isPasswordVisible)}
                name={isPasswordVisible ? 'view' : 'view-off'}
                color="green.800"
                cursor="pointer"
              />
            </InputRightElement>
          </InputGroup>
          {inputErrors.password && (
            <FormHelperText m={0} color="red.500">
              <Icon name="warning" />
              {' '}
              {inputErrors.password}
            </FormHelperText>
          )}
        </Stack>
      </FormControl>
      <SubmitButton
        loadingText="...signing in..."
        title="SignIn"
        isLoading={loading}
        areValuesProvided={areValuesProvided}
        handler={handleSignIn}
      />
    </>
  );
};

Signin.propTypes = {
  loading: bool.isRequired,
  serverError: instanceOf(any),
  signIn: func.isRequired,
  setServerError: func.isRequired,
};

Signin.defaultProps = {
  serverError: [],
};

export default Signin;
