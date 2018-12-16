import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

const globalAny: any = global;
const isBrowser = typeof window !== 'undefined';
let apolloClient: any = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  globalAny.fetch = fetch;
}

function create(initialState: any) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    connectToDevTools: isBrowser,
    link: new HttpLink({
      uri: process.env.GRAPHQL_API_URL // Server URL (must be absolute)
      // credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }),
    ssrMode: !isBrowser // Disables forceFetch on the server (so queries are only run once)
  });
}

export default function initApollo(initialState: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
