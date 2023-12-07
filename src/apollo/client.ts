import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RICK_URL } from '../constants/api';

export const client = new ApolloClient({
  uri: RICK_URL,
  cache: new InMemoryCache(),
});
