import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import ShoppingCart from 'pages/ShoppingCart';
import NotFound from 'pages/NotFound';
import { ShoppingCartProvider } from 'context/ShoppingCartContext';
import { CountryProvider } from './context/CountryContext';
import { OrderCompletedPage } from './pages/OrderCompletedPage';

interface AppProps {
  onToggleEnv: () => void;
  currentEnvironment: string;
}

function App({ onToggleEnv, currentEnvironment }: AppProps) {
  return (
    <CountryProvider>
      <ShoppingCartProvider>
        <div className="min-h-screen lg:max-w-5xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onToggleEnv={onToggleEnv}
                  currentEnvironment={currentEnvironment}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <ShoppingCart
                  onToggleEnv={onToggleEnv}
                  currentEnvironment={currentEnvironment}
                />
              }
            />
            <Route
              path="/cart/checkout"
              element={
                <ShoppingCart
                  onToggleEnv={onToggleEnv}
                  currentEnvironment={currentEnvironment}
                />
              }
            />
            <Route
              path="/order-completed"
              element={
                <OrderCompletedPage
                  onToggleEnv={onToggleEnv}
                  currentEnvironment={currentEnvironment}
                />
              }
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </CountryProvider>
  );
}

export default App;
