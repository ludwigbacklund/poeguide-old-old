import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import WebFont from 'webfontloader';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './features';
import Fontin from './static/Fontin-SmallCaps.ttf';

// eslint-disable-next-line
injectGlobal`
  @font-face {
    font-family: Fontin;
    src: url(${Fontin});
  }

  html, body {
    font-family: Fontin;
    width: 100%;
    height: 100%;
  }
`;

const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

// WebFont.load({
//   custom: {
//     families: ['Fontin SmallCaps'],
//     urls: ['../public/fonts.css'],
//   },
// });
