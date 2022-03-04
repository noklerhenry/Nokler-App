import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Auth0Provider
      domain='dev-4dwzec6x.us.auth0.com'
      clientId='oDVbYUSJ60qpeBqm9h0OHLNsrTygI24q'
      redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

