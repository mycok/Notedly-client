import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from '@apollo/client';
import { onError } from 'apollo-link-error';

const uri = process.env.NODE_ENV === 'production'
  ? process.env.API_PROD_URL
  : process.env.API_DEV_URL;
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });

const authHeaderMiddlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext((prevContext) => ({
    ...prevContext,
    headers: {
      ...prevContext.headers,
      Authorization: localStorage.getItem('jwt')
        ? `Bearer ${localStorage.getItem('jwt')}`
        : null,
    },
  }));

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
