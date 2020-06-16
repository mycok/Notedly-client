import React from 'react';
import { instanceOf, bool, func } from 'prop-types';
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

const Signup = ({
  authState,
  inputErrors,
  isPasswordVisible,
  handleOnChange,
  setPasswordVisibility,
}) => (
  <FormControl mb={5}>
    <Stack spacing={4}>
      <InputGroup>
        <Input
          isRequired
          name="username"
          placeholder="Enter username....."
          value={authState.username}
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
          value={authState.email}
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
          value={authState.password}
          isInvalid={Object.values(inputErrors).length > 0}
          focusBorderColor="clear"
          errorBorderColor={inputErrors.password ? 'red.300' : 'clear'}
          color="#000000"
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
      {inputErrors.password && (
        <FormHelperText m={0} color="red.500">
          <Icon name="warning" />
          {' '}
          {inputErrors.password}
        </FormHelperText>
      )}
    </Stack>
  </FormControl>
);

Signup.propTypes = {
  authState: instanceOf(Object).isRequired,
  inputErrors: instanceOf(Object),
  isPasswordVisible: bool.isRequired,
  handleOnChange: func.isRequired,
  setPasswordVisibility: func.isRequired,
};

Signup.defaultProps = {
  inputErrors: {},
};

export default Signup;
