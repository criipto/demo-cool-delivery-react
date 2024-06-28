import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import '@fontsource/ibm-plex-sans';
import { EnvironmentProvider } from './context/EnvironmentContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EnvironmentProvider>
        <App />
      </EnvironmentProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
