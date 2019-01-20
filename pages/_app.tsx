import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import withApolloClient from '../utils/with-apollo';

class MyApp extends App {
  render() {
    const anyProps = this.props as any;
    const { Component, pageProps, apollo } = anyProps;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
