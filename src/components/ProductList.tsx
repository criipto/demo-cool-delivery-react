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
      <h1 className="p-4 py-6 text-xl font-bold text-deep-purple-900">Beer</h1>
      <div className="mt-2 flex flex-col gap-y-2 overflow-y-auto px-4 pb-24 lg:px-0">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {!isCartEmpty && <ViewCartButton />}
    </div>
  );
}
