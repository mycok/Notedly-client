import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Box,
  Stack,
  Text,
} from '@chakra-ui/core';

import SubmitButton from './SubmitButton';

const Signup = () => {
  const [authState, setAuthState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isValid] = useState(true);
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isLoading] = useState(false);
  const [areValuesProvided, setValuesProvided] = useState(false);
  const [serverErrors] = useState(null);

  const handleOnChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setAuthState((prevAuthState) => ({ ...prevAuthState, [name]: value }));
  };

  useEffect(() => {
    const { username, email, password } = authState;
    if (username && email && password) {
      setValuesProvided(true);
    } else {
      setValuesProvided(false);
    }
  }, [authState]);

  return (
    <Box
      pos="absolute"
      m="auto"
      top="25%"
      left="25%"
      right="25%"
      w="600px"
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
        SignUp
      </Text>
      <FormControl mb={5}>
        <Stack spacing={4}>
          <InputGroup>
            <Input
              isRequired
              name="username"
              placeholder="Enter username....."
              value={authState.username}
              isInvalid={!isValid}
              focusBorderColor="gray.800"
              errorBorderColor="red.300"
              onChange={handleOnChange}
            />
          </InputGroup>
          {serverErrors && (
            <FormHelperText m={0} color="red.500">
              {serverErrors[0].message}
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
              value={authState.email}
              focusBorderColor="gray.800"
              onChange={handleOnChange}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement>
              <Icon name="lock" color="green.800" />
            </InputLeftElement>
            <Input
              name="password"
              isRequired
              type={isPasswordVisible ? '' : 'password'}
              placeholder="Enter password....."
              value={authState.password}
              focusBorderColor="gray.800"
              onChange={handleOnChange}
            />
            <InputRightElement>
              <Icon
                onClick={() => setPasswordVisibility(!isPasswordVisible)}
                name={isPasswordVisible ? 'view-off' : 'view'}
                color="green.800"
                cursor="pointer"
              />
            </InputRightElement>
          </InputGroup>
        </Stack>
      </FormControl>
      <SubmitButton
        loadingText="...signing up..."
        title="SignUp"
        isLoading={isLoading}
        areValuesProvided={areValuesProvided}
      />
    </Box>
  );
};

export default Signup;
