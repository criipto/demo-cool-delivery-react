import { Product } from '../types';
import QuantityControlButton from './QuantityControlButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  const { name, volume, abv, price, image, id } = props.product;

  return (
    <>
      <div className="relative bg-primary25 flex justify-between items-center h-[124px]">
        <div className="p-3">
          <div className="pb-3">
            <h1 className="font-bold text-[15px]">
              {volume} {name}
            </h1>
            <p className="text-lightBlue text-sm">{abv}</p>
          </div>
          <p className="font-medium text-[15px]">{price},00 kr</p>
        </div>
        <img
          src={`/products/${image}`}
          className="max-h-[100px] py-3 pr-4 mr-8"
        />
        <QuantityControlButton id={id} />
      </div>
    </>
  );
}
