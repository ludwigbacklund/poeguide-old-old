import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
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
    display: flex;
    justify-content: center;
  }
`;

const theme = createMuiTheme({
  typography: { fontFamily: 'Fontin' },
});

const persistConfig = {
  key: 'timeline',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);
const persistor = persistStore(store);
// persistor.purge();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
