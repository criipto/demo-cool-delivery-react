import { Product } from '../types';
import QuantityControlButton from './QuantityControlButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  const { name, volume, abv, price, image, id } = props.product;

  return (
    <>
      <div className="relative flex h-[124px] items-center justify-between bg-primary-25">
        <div className="p-3">
          <div className="pb-3">
            <h1 className="text-[15px] font-bold">
              {volume} {name}
            </h1>
            <p className="text-sm text-light-blue-800">{abv}</p>
          </div>
          <p className="text-[15px] font-medium">{price},00 kr</p>
        </div>
        <img
          src={`/products/${image}`}
          className="mr-8 max-h-[100px] py-3 pr-4"
        />
        <QuantityControlButton id={id} />
      </div>
    </>
  );
}
