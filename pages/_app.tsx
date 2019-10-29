import App from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

import withRedux from '../src/utils/with-redux';
import fetchFonts from '../src/utils/fetch-fonts';
import withApolloClient from '../src/utils/with-apollo';
import { theme } from '../src/utils/styling';

class MyApp extends App {
  componentDidMount() {
    fetchFonts();
  }

  render() {
    const anyProps = this.props as any;
    const { Component, pageProps, apollo } = anyProps;

    const getLayout = Component.getLayout || ((page: any) => page);

    return (
      <ApolloProvider client={apollo}>
        <ApolloHooksProvider client={apollo}>
          <ThemeProvider theme={theme}>
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default withRedux(withApolloClient(MyApp));
