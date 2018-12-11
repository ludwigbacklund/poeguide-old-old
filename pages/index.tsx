import React from 'react';

import App from '../src/components/App/App';
import fetchFonts from '../utils/fetchFonts';

class Index extends React.Component {
  componentDidMount() {
    fetchFonts();
  }

  render() {
    return <App />;
  }
}

export default Index;
