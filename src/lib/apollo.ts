import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ocpfs01vpn01xi07su5fg8/master',
  cache: new InMemoryCache(),
});
