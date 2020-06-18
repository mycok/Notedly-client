import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from '@apollo/client';
import { onError } from 'apollo-link-error';

import { isAuthenticated } from '../utils/authHelpers';

const uri = process.env.NODE_ENV === 'production'
  ? process.env.API_PROD_URL
  : process.env.API_DEV_URL;
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });

const authHeaderMiddlewareLink = new ApolloLink((operation, forward) => {
  const user = isAuthenticated();

  if (user) {
    operation.setContext((prevContext) => ({
      ...prevContext,
      headers: {
        ...prevContext.headers,
        Authorization: `Bearer ${user.token}`,
      },
    }));
  }

  return forward(operation);
});

export const client = new ApolloClient({
  link: ApolloLink.from([
    authHeaderMiddlewareLink,
    onError(({ graphQLErrors }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ extensions }) => {
          if (extensions.code === 'UNAUTHENTICATED') {
            localStorage.removeItem('jwt');
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
