import React, { useEffect, useReducer } from 'react';
import {
  bool, func, shape, string,
} from 'prop-types';

import Form from './Form';
import { authValidation } from '../../utils/validation';
import { authReducer } from './authReducer';

const initialState = {
  email: '',
  password: '',
  isPasswordVisible: false,
  areValuesProvided: false,
  inputErrors: {},
};

const Signin = ({
  loading, signIn, serverError, setServerError,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setServerError(null);
  }, []);

  useEffect(() => {
    const { email, password } = state;

    if (email && password) {
      dispatch({ type: 'CHECK_INPUT_VALUES', areValuesProvided: true });
    } else {
      dispatch({ type: 'CHECK_INPUT_VALUES', areValuesProvided: false });
    }

    if (Object.values(state.inputErrors).length > 0) {
      dispatch({ type: 'SET_INPUT_ERRORS', inputErrors: {} });
    }
  }, [state.email, state.password]);

  const handleOnChange = (event) => {
    event.persist();
    dispatch({ type: 'ON_CHANGE', event });

    if (serverError) {
      setServerError(null);
    }
  };

  const handleSignIn = () => {
    const { email, password } = state;
    const inputErrors = authValidation(email, password);
    if (inputErrors.email || inputErrors.password) {
      dispatch({ type: 'SET_INPUT_ERRORS', inputErrors });
    } else {
      signIn({ variables: { email, password } });
    }
  };

  return (
    <Form
      state={state}
      loading={loading}
      forSignup={false}
      onSubmitHandler={handleSignIn}
      onChangeHandler={handleOnChange}
      dispatch={dispatch}
    />
  );
};

Signin.propTypes = {
  loading: bool.isRequired,
  serverError: shape({ root: string.isRequired }),
  signIn: func.isRequired,
  setServerError: func.isRequired,
};

Signin.defaultProps = {
  serverError: [],
};

export default Signin;
