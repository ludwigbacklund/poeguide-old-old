import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from '../utils/withApolloClient';

class MyApp extends App {
  render() {
    const anyProps = this.props as any;
    const { Component, pageProps, apolloClient } = anyProps;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
