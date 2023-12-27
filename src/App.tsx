import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import ShoppingCart from 'pages/ShoppingCart';
import NotFound from 'pages/NotFound';
import { ShoppingCartProvider } from 'context/ShoppingCartContext';

interface AppProps {
  onToggleEnv: () => void;
  currentEnvironment: string;
}

function App({ onToggleEnv, currentEnvironment }: AppProps) {
  return (
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
            element={<ShoppingCart />}
          />
          <Route
            path="/cart/checkout"
            element={<ShoppingCart />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
