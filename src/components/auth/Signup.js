import React, { useState, useEffect } from 'react';
import { bool, func } from 'prop-types';
import {
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Stack,
} from '@chakra-ui/core';

import SubmitButton from './SubmitButton';
import { authValidation } from '../../utils/validation';

const Signup = ({ loading, signUp }) => {
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

  return (
    <>
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
              color="#000000"
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
              <Icon name="email" color="green.800" />
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
              value={signupState.password}
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
};

export default Signup;
