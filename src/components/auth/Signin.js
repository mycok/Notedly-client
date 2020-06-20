import React, { useEffect, useReducer } from 'react';
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
  const [state, dispatch] = useReducer(
    (initialState, action) => {
      switch (action.type) {
        case 'ON_CHANGE': {
          const {
            target: { name, value },
          } = action.event;
          return {
            ...initialState,
            signinState: { ...initialState.signinState, [name]: value },
          };
        }
        case 'TOGGLE_PASSWORD_VISIBILITY':
          return {
            ...initialState,
            isPasswordVisible: action.isPasswordVisible,
          };
        case 'CHECK_INPUT_VALUES':
          return {
            ...initialState,
            areValuesProvided: action.areValuesProvided,
          };
        case 'SET_INPUT_ERRORS':
          return { ...initialState, inputErrors: action.inputErrors };
        default:
          return initialState;
      }
    },
    {
      signinState: {
        email: '',
        password: '',
      },
      isPasswordVisible: false,
      areValuesProvided: false,
      inputErrors: {},
    },
  );

  const handleOnChange = (event) => {
    event.persist();
    dispatch({ type: 'ON_CHANGE', event });

    if (serverError) {
      setServerError(null);
    }
  };

  const handleSignIn = () => {
    const inputErrors = authValidation(
      state.signinState.email,
      state.signinState.password,
    );
    if (inputErrors.email || inputErrors.password) {
      dispatch({ type: 'SET_INPUT_ERRORS', inputErrors });
    } else {
      signIn({ variables: { ...state.signinState } });
    }
  };

  useEffect(() => {
    const { email, password } = state.signinState;

    if (email && password) {
      dispatch({ type: 'CHECK_INPUT_VALUES', areValuesProvided: true });
    } else {
      dispatch({ type: 'CHECK_INPUT_VALUES', areValuesProvided: false });
    }

    if (Object.values(state.inputErrors).length > 0) {
      dispatch({ type: 'SET_INPUT_ERRORS', inputErrors: {} });
    }
  }, [state.signinState]);

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
              <Icon name="email" />
            </InputLeftElement>
            <Input
              name="email"
              isRequired
              type="email"
              placeholder="Enter email....."
              value={state.signinState.email}
              isInvalid={Object.values(state.inputErrors).length > 0}
              focusBorderColor="clear"
              errorBorderColor={state.inputErrors.email ? 'red.300' : 'clear'}
              border="none"
              bg="#3b4048"
              rounded="lg"
              onChange={handleOnChange}
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
              value={state.signinState.password}
              isInvalid={Object.values(state.inputErrors).length > 0}
              focusBorderColor="clear"
              errorBorderColor={
                state.inputErrors.password ? 'red.300' : 'clear'
              }
              border="none"
              bg="#3b4048"
              rounded="lg"
              onChange={handleOnChange}
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
        loadingText="...signing in..."
        title="SignIn"
        isLoading={loading}
        areValuesProvided={state.areValuesProvided}
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
