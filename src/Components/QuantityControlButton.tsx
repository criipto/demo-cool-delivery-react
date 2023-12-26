import plusIcon from '../assets/plus-icon.png';
import minusIcon from '../assets/minus-icon.png';
import bin from '../assets/remove-icon.png';
import { useShoppingCart } from 'context/ShoppingCartContext';

interface QuantityControlProps {
  id: number;
}

export default function QuantityControlButton(props: QuantityControlProps) {
  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity } = useShoppingCart();
  const { id } = props;
  const quantity = getItemQuantity(id);

  return (
    <div className="absolute bottom-0 right-0 m-2 ml-1.5">
      {quantity === 0 ? (
        <div>
          <button
            onClick={() => increaseCartQuantity(id)}
            type="button"
            className="rounded-full bg-primary600 p-3 text-white shadow-sm"
          >
            <img
              src={plusIcon}
              alt="Plus Icon"
              className="h-4 w-4"
            />
          </button>
        </div>
      ) : (
        <div className="rounded-full bg-primary600 p-2 text-white shadow-sm hover:bg-primary700 ">
          <div className="flex items-center justify-around w-[109px] h-6 p-0 m-0 text-sm">
            <button
              className="py-2"
              onClick={() => decreaseCartQuantity(id)}
            >
              {quantity > 1 ? (
                <img
                  src={minusIcon}
                  alt="Minus Icon"
                  className="w-4 h-[1px]"
                />
              ) : (
                <img
                  src={bin}
                  alt="Garbage Bin"
                  className="w-[14px] h-4"
                />
              )}
            </button>
            <p className="p-0 m-0 text-xs font-semibold">{quantity}</p>
            <button onClick={() => increaseCartQuantity(id)}>
              <img
                src={plusIcon}
                alt="Plus Icon"
                className="h-4 w-4"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
