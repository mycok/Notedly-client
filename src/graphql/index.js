import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from '@apollo/client';
import { onError } from 'apollo-link-error';

import { isAuthenticated } from '../utils/authHelpers';

const uri = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_API_PROD_URL
  : process.env.REACT_APP_API_DEV_URL;
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });

const authHeaderMiddlewareLink = new ApolloLink((operation, forward) => {
  const publicOperations = [
    'signUp',
    'signIn',
    'noteFeed',
    'users',
    'notesByAuthor',
  ];

  if (publicOperations.includes(operation.operationName)) {
    return forward(operation);
  }

  const user = isAuthenticated();
  if (user) {
    operation.setContext((prevContext) => ({
      ...prevContext,
      headers: {
        ...prevContext.headers,
        authorization: `Bearer ${user.token}`,
      },
    }));
  }

  return forward(operation);
});

export const client = new ApolloClient({
  link: ApolloLink.from([
    authHeaderMiddlewareLink,
    onError(({ networkError }) => {
      /*
        check the networkError object for 'UNAUTHENTICATED' code
        which would mean that either the authorization header was not set or the token has expired
        if the token is expired, then we should remove it from
        the local storage and prompt the user to login fresh
       */
      if (networkError) {
        networkError.result.errors.map(async ({ extensions }) => {
          if (extensions.code === 'UNAUTHENTICATED') {
            localStorage.removeItem('user');
            await client.resetStore();
          }
        });
      }
    }),
    httpLink,
  ]),
  cache,
  connectToDevTools: true,
  resolvers: {},
});
