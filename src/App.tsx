import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import ShoppingCart from 'pages/ShoppingCart';
import NotFound from 'pages/NotFound';
import { ShoppingCartProvider } from 'context/ShoppingCartContext';
import { CountryProvider } from './context/CountryContext';
import { CheckoutDetailsPage } from './pages/CheckoutDetailsPage';
import { CheckoutCompletedPage } from './pages/CheckoutCompletedPage';
import { CallbackPage } from './pages/CallbackPage';
import { ReactElement } from 'react';
import { useEnvironment } from './context/EnvironmentContext';
import { CriiptoVerifyProvider } from '@criipto/verify-react';

function App(): ReactElement {
  const { environment } = useEnvironment();

  const domain =
    environment === 'production' ? 'demos.criipto.id' : 'demos-test.criipto.id';

  return (
    <CriiptoVerifyProvider
      domain={domain}
      clientID="urn:demos:cool-delivery-react"
      redirectUri={`${window.location.origin}/callback?to=${btoa('/invalid_redirect_url')}`}
      sessionStore={window.sessionStorage}
      message="Log in to Cool Delivery"
    >
      <CountryProvider>
        <ShoppingCartProvider>
          <div className="mx-auto min-h-screen lg:max-w-5xl">
            <Routes>
              <Route path="/callback" element={<CallbackPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/cart/checkout" element={<ShoppingCart />} />
              <Route
                path="/checkout/details"
                element={<CheckoutDetailsPage />}
              />
              <Route
                path="/checkout/completed"
                element={<CheckoutCompletedPage />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </ShoppingCartProvider>
      </CountryProvider>
    </CriiptoVerifyProvider>
  );
}

export default App;
