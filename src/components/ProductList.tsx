import { Product } from '../types';
import ProductCard from './ProductCard';
import ViewCartButton from './ViewCartButton';
import { useShoppingCart } from 'context/ShoppingCartContext';

interface ProductListProps {
  products: Product[];
}

export default function ProductList(props: ProductListProps) {
  const { products } = props;
  const { isCartEmpty } = useShoppingCart();
  return (
    <div>
      <h1 className="font-bold text-xl p-4 py-6 text-deepPurple-900">Beer</h1>
      <div className="flex flex-col overflow-y-auto px-4 pb-24 lg:px-0 mt-2 gap-y-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
      {!isCartEmpty && <ViewCartButton />}
    </div>
  );
}
