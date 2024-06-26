import { useShoppingCart } from 'context/ShoppingCartContext';
import classNames from 'classnames';
import { MinusIcon, PlusIcon, TrashIcon } from './Icon';

interface QuantityControlProps {
  id: number;
}

export default function QuantityControlButton(props: QuantityControlProps) {
  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity } = useShoppingCart();
  const { id } = props;
  const quantity = getItemQuantity(id);

  return (
    <div className="absolute bottom-0 right-0 m-2 ml-1.5">
      <div className={classNames('bg-primary-600 flex items-center justify-around rounded-full text-white text-sm shadow-sm hover:bg-primary-700 leading-none', {
        'gap-x-4': quantity > 0,
      })}>
          {quantity > 0 && (
            <>
              <button
                className="p-3"
                onClick={() => decreaseCartQuantity(id)}
              >
                {quantity > 1 ? (
                  <>
                    <MinusIcon className="h-4 w-4 text-white"/>
                  </>
                ) : (
                  <TrashIcon className="h-4 w-4 text-white"/>
                )}
              </button>
              <p className="p-0 m-0 text-xs font-semibold">{quantity}</p>
            </>
          )}
          <button className="p-3" onClick={() => increaseCartQuantity(id)}>
            <PlusIcon className="w-4 h-4"/>
          </button>
      </div>
    </div>
  );
}
