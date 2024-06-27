import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import ShoppingCart from 'pages/ShoppingCart';
import NotFound from 'pages/NotFound';
import { ShoppingCartProvider } from 'context/ShoppingCartContext';
import { CountryProvider } from './context/CountryContext';
import { CheckoutDetailsPage } from './pages/CheckoutDetailsPage';
import { CheckoutCompletedPage } from './pages/CheckoutCompletedPage';
import { CallbackPage } from './pages/CallbackPage';

interface AppProps {
  onToggleEnv: () => void;
  currentEnvironment: string;
}

function App({ onToggleEnv, currentEnvironment }: AppProps) {
  return (
    <CountryProvider>
      <ShoppingCartProvider>
        <div className="mx-auto min-h-screen lg:max-w-5xl">
          <Routes>
            <Route path="/callback" element={<CallbackPage />} />
            <Route
              path="/"
              element={
                <Home
                  onToggleEnv={onToggleEnv}
                  currentEnvironment={currentEnvironment}
                />
              }
            />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/cart/checkout" element={<ShoppingCart />} />
            <Route path="/checkout/details" element={<CheckoutDetailsPage />} />
            <Route
              path="/checkout/completed"
              element={<CheckoutCompletedPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </CountryProvider>
  );
}

export default App;
