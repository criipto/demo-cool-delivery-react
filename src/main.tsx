import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useSearchParams } from 'react-router-dom';
import { CriiptoVerifyProvider } from '@criipto/verify-react';
import App from './App';
import './index.css';
import '@fontsource/ibm-plex-sans';

function CriiptoVerifyProviderWrapper() {
  //const environment = search.get('environment') ?? 'test';
  const [searchParams, setSearchParams] = useSearchParams();
  const [environment, setEnvironment] = useState(
    searchParams.get('environment') ?? 'test',
  );

  const domain =
    environment === 'test' ? 'demos-test.criipto.id' : 'demos.criipto.id';

  const handleToggleEnv = () => {
    setSearchParams((params) => {
      const newEnvironment =
        params.get('environment') === 'test' ? 'production' : 'test';
      params.set('environment', newEnvironment);
      setEnvironment(newEnvironment);
      return params;
    });
  };

  return (
    <CriiptoVerifyProvider
      domain={domain}
      clientID="urn:demos:cool-delivery-react"
      redirectUri={window.location.origin + '/cart'}
      sessionStore={window.sessionStorage}
      message="Log in to Cool Delivery"
    >
      <App onToggleEnv={handleToggleEnv} currentEnvironment={environment} />
    </CriiptoVerifyProvider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CriiptoVerifyProviderWrapper />
    </BrowserRouter>
  </React.StrictMode>,
);
