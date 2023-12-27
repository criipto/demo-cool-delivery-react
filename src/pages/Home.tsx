import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import { productsData } from '../products';
import { EnvProps } from 'types';

function Home({ onToggleEnv, currentEnvironment }: EnvProps) {
  return (
    <div className="min-h-screen">
      <Header
        onToggleEnv={onToggleEnv}
        currentEnvironment={currentEnvironment}
      />
      <Navbar />
      <ProductList products={productsData.beers} />
    </div>
  );
}

export default Home;
