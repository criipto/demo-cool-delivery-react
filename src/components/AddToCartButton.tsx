import plusIcon from '../assets/plus-icon.png';
import minusIcon from '../assets/minus-icon.png';
import { Product } from '../types';

interface Props {
  addToCart: (product: Product) => void;
  product: Product;
  count: number;
}

export default function Button(props: Props) {
  const { product, addToCart, count } = props;

  return (
    <>
      <div className="cta absolute bottom-0 right-0 m-2 ml-1.5">
        <div className="rounded-full bg-primary600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <div className="flex items-center justify-around w-[109px] h-10 p-0 m-0 text-sm">
            <button onClick={() => addToCart(product)}>
              <img
                src={minusIcon}
                className="w-4 h-[1px]"
              />
            </button>
            <p className="p-0 m-0 text-xs">{count}</p>
            <button onClick={() => addToCart(product)}>
              <img
                src={plusIcon}
                className="h-4 w-4 text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
