import React, { useEffect, useReducer } from 'react';
import {
  bool, func, shape, string,
} from 'prop-types';

import Form from './Form';
import { authValidation } from '../../utils/validation';
import { authReducer } from './authReducer';

const initialState = {
  username: '',
  email: '',
  password: '',
  isPasswordVisible: false,
  areValuesProvided: false,
  inputErrors: {},
};

const Signup = ({
  loading, signUp, serverError, setServerError,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setServerError(null);
  }, []);

  useEffect(() => {
    const { username, email, password } = state;

    if (username && email && password) {
      dispatch({ type: 'CHECK_INPUT_VALUES', areValuesProvided: true });
    } else {
      dispatch({ type: 'CHECK_INPUT_VALUES', areValuesProvided: false });
    }

    if (Object.values(state.inputErrors).length > 0) {
      dispatch({ type: 'SET_INPUT_ERRORS', inputErrors: {} });
    }
  }, [state.username, state.email, state.password]);

  const handleOnChange = (event) => {
    event.persist();
    dispatch({ type: 'ON_CHANGE', event });

    if (serverError) {
      setServerError(null);
    }
  };

  const handleSignUp = () => {
    const { username, email, password } = state;
    const inputErrors = authValidation(email, password, username);
    if (inputErrors.username || inputErrors.email || inputErrors.password) {
      dispatch({ type: 'SET_INPUT_ERRORS', inputErrors });
    } else {
      signUp({ variables: { username, email, password } });
    }
  };

  return (
    <Form
      state={state}
      loading={loading}
      forSignup
      onSubmitHandler={handleSignUp}
      onChangeHandler={handleOnChange}
      dispatch={dispatch}
    />
  );
};

Signup.propTypes = {
  loading: bool.isRequired,
  signUp: func.isRequired,
  serverError: shape({ root: string.isRequired }),
  setServerError: func.isRequired,
};

Signup.defaultProps = {
  serverError: [],
};

export default Signup;
