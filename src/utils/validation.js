const emailRegex = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const passwordRegex = (password) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return re.test(password);
};

const usernameLength = (username) => username.length >= 3;

export const authValidation = (email, password, username = '') => {
  const validationErrors = {};

  if (username && !usernameLength(username)) {
    validationErrors.username = 'Username must have atleast 3 characters';
  }

  if (!emailRegex(email)) {
    validationErrors.email = 'Please provide a valid email';
  }
  if (!passwordRegex(password)) {
    validationErrors.password = 'Password must have atleast 8 characters, a lowercase, uppercase, number and a special character';
  }

  return validationErrors;
};
