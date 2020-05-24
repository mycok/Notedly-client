import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = process.env.API_URL;
const cache = new InMemoryCache();

export const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
});
