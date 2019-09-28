import React from 'react';
import { ThemeProvider } from 'styled-components';

import { App } from '../src/components/App/App';
import fetchFonts from '../src/utils/fetch-fonts';
import { theme } from '../src/utils/styling';

class Index extends React.Component {
  componentDidMount() {
    fetchFonts();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
  }
}

export default Index;
