import App from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import withApolloClient from '../src/utils/with-apollo';

class MyApp extends App {
  render() {
    const anyProps = this.props as any;
    const { Component, pageProps, apollo } = anyProps;

    return (
      <ApolloProvider client={apollo}>
        <ApolloHooksProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
