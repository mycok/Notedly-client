import React from 'react';
import { bool, func, instanceOf } from 'prop-types';
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

const Form = ({
  state,
  loading,
  onSubmitHandler,
  onChangeHandler,
  dispatch,
  forSignup,
}) => (
  <>
    <FormControl mb={5}>
      <Stack spacing={4}>
        {forSignup && (
          <>
            <Input
              isRequired
              name="username"
              placeholder="Enter username....."
              value={state.username}
              isInvalid={Object.values(state.inputErrors).length > 0}
              focusBorderColor="clear"
              errorBorderColor={
                state.inputErrors.username ? 'red.300' : 'clear'
              }
              border="none"
              bg="#3b4048"
              rounded="lg"
              mb={4}
              onChange={onChangeHandler}
            />
            {state.inputErrors.username && (
              <FormHelperText m={0} color="red.500" mb={4}>
                <Icon name="warning" />
                {' '}
                {state.inputErrors.username}
              </FormHelperText>
            )}
          </>
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
            value={state.email}
            isInvalid={Object.values(state.inputErrors).length > 0}
            focusBorderColor="clear"
            errorBorderColor={state.inputErrors.email ? 'red.300' : 'clear'}
            border="none"
            bg="#3b4048"
            rounded="lg"
            onChange={onChangeHandler}
          />
        </InputGroup>
        {state.inputErrors.email && (
          <FormHelperText m={0} color="red.500">
            <Icon name="warning" />
            {' '}
            {state.inputErrors.email}
          </FormHelperText>
        )}

        <InputGroup>
          <InputLeftElement>
            <Icon name="lock" />
          </InputLeftElement>
          <Input
            name="password"
            isRequired
            type={state.isPasswordVisible ? '' : 'password'}
            placeholder="Enter password....."
            value={state.password}
            isInvalid={Object.values(state.inputErrors).length > 0}
            focusBorderColor="clear"
            errorBorderColor={state.inputErrors.password ? 'red.300' : 'clear'}
            border="none"
            bg="#3b4048"
            rounded="lg"
            onChange={onChangeHandler}
          />
          <InputRightElement>
            <Icon
              onClick={() => dispatch({
                type: 'TOGGLE_PASSWORD_VISIBILITY',
                isPasswordVisible: !state.isPasswordVisible,
              })}
              name={state.isPasswordVisible ? 'view' : 'view-off'}
              cursor="pointer"
            />
          </InputRightElement>
        </InputGroup>
        {state.inputErrors.password && (
          <FormHelperText m={0} color="red.500">
            <Icon name="warning" />
            {' '}
            {state.inputErrors.password}
          </FormHelperText>
        )}
      </Stack>
    </FormControl>
    <SubmitButton
      loadingText={forSignup ? '...signing up...' : '...signing in...'}
      title={forSignup ? 'Sign Up' : 'Sign In'}
      isLoading={!!loading}
      areValuesProvided={state.areValuesProvided}
      handler={onSubmitHandler}
    />
  </>
);

Form.propTypes = {
  state: instanceOf(Object).isRequired,
  loading: bool.isRequired,
  onSubmitHandler: func.isRequired,
  forSignup: bool.isRequired,
  dispatch: func.isRequired,
  onChangeHandler: func.isRequired,
};

export default Form;
