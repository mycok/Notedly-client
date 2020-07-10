export const authReducer = (initialState, action) => {
  switch (action.type) {
    case 'ON_CHANGE': {
      const {
        target: { name, value },
      } = action.event;
      return { ...initialState, [name]: value };
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
};
