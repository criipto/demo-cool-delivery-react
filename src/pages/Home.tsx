import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import { productsData } from '../../products';

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navbar />
      <ProductList products={productsData.beers} />
    </div>
  );
}

export default Home;
