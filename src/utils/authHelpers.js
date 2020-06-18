const authenticate = (data, cb) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(data.signIn));
    cb();
  }
};

const isAuthenticated = () => {
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user'));
  }
  return false;
};

export { authenticate, isAuthenticated };
