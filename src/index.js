import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from 'redux/store';

import App from './components/App';

import { GlobalStyle } from 'components/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/test-tweets">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <GlobalStyle />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
