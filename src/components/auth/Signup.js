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
import CustomInputErrorAlert from '../shared/Alert';
import { authValidation } from '../../utils/validation';

const Signup = ({
  loading, signUp, serverError, setServerError,
}) => {
  const [signupState, setSignupState] = useState({
    username: '',
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
    setSignupState((prevSignupState) => ({
      ...prevSignupState,
      [name]: value,
    }));

    if (serverError) {
      setServerError(null);
    }
  };

  const handleSignUp = () => {
    const validationErrors = authValidation(
      signupState.email,
      signupState.password,
      signupState.username,
    );
    if (
      validationErrors.username
      || validationErrors.email
      || validationErrors.password
    ) {
      setInputErrors(validationErrors);
    } else {
      signUp({ variables: { ...signupState } });
    }
  };

  useEffect(() => {
    const { username, email, password } = signupState;

    if (username && email && password) {
      setValuesProvided(true);
    } else {
      setValuesProvided(false);
    }

    if (Object.values(inputErrors).length > 0) {
      setInputErrors({});
    }
  }, [signupState]);

  useEffect(() => {
    setServerError(null);
  }, []);

  return (
    <>
      <Box mb={3}>
        {serverError && (
          <CustomInputErrorAlert
            message={serverError.graphQLErrors[0].message}
          />
        )}
      </Box>
      <FormControl mb={5}>
        <Stack spacing={4}>
          <InputGroup>
            <Input
              isRequired
              name="username"
              placeholder="Enter username....."
              value={signupState.username}
              isInvalid={Object.values(inputErrors).length > 0}
              focusBorderColor="clear"
              errorBorderColor={inputErrors.username ? 'red.300' : 'clear'}
              border="none"
              bg="#3b4048"
              rounded="lg"
              onChange={handleOnChange}
            />
          </InputGroup>
          {inputErrors.username && (
            <FormHelperText m={0} color="red.500">
              <Icon name="warning" />
              {' '}
              {inputErrors.username}
            </FormHelperText>
          )}

          <InputGroup>
            <InputLeftElement>
              <Icon name="email" />
            </InputLeftElement>
            <Input
              name="email"
              isRequired
              type="email"
              placeholder="Enter email....."
              value={signupState.email}
              isInvalid={Object.values(inputErrors).length > 0}
              focusBorderColor="clear"
              errorBorderColor={inputErrors.email ? 'red.300' : 'clear'}
              border="none"
              bg="#3b4048"
              rounded="lg"
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
              <Icon name="lock" />
            </InputLeftElement>
            <Input
              name="password"
              isRequired
              type={isPasswordVisible ? '' : 'password'}
              placeholder="Enter password....."
              value={signupState.password}
              isInvalid={Object.values(inputErrors).length > 0}
              focusBorderColor="clear"
              errorBorderColor={inputErrors.password ? 'red.300' : 'clear'}
              border="none"
              bg="#3b4048"
              rounded="lg"
              onChange={handleOnChange}
            />
            <InputRightElement>
              <Icon
                onClick={() => setPasswordVisibility(!isPasswordVisible)}
                name={isPasswordVisible ? 'view' : 'view-off'}
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
        loadingText="...signing up..."
        title="SignUp"
        isLoading={loading}
        areValuesProvided={areValuesProvided}
        handler={handleSignUp}
      />
    </>
  );
};

Signup.propTypes = {
  loading: bool.isRequired,
  signUp: func.isRequired,
  serverError: instanceOf(any),
  setServerError: func.isRequired,
};

Signup.defaultProps = {
  serverError: [],
};

export default Signup;
