import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CriiptoVerifyProvider } from '@criipto/verify-react';
import App from './App';
import './index.css';
import '@fontsource/ibm-plex-sans';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CriiptoVerifyProvider
      domain="demos-test.criipto.id"
      clientID="urn:demos:cool-delivery-react"
      redirectUri={window.location.origin + '/cart'}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CriiptoVerifyProvider>
  </React.StrictMode>
);
