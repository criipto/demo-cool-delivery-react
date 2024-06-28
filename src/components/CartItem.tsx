import { productsData } from '../products';
import { AbvLabel } from './AbvLabel';
import QuantityControlButton from './QuantityControlButton';

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const item = productsData.beers.find((i) => i.id === id);
  if (item === null) return null;

  const totalItemPrice = (price: number, quantity: number) => {
    return price * quantity;
  };

  return (
    <>
      <div className="relative flex h-[124px] items-center justify-between bg-primary-25">
        <div className="p-3">
          <div className="pb-3">
            <h1 className="text-[15px] font-bold">
              {item!.volume} {item!.name}
            </h1>
            <p className="text-sm text-light-blue-800">
              <AbvLabel>{item!.abv}</AbvLabel>
            </p>
          </div>
          <p className="text-[15px] font-medium">
            {totalItemPrice(item!.price, quantity)},00 kr
          </p>
        </div>
        <img
          src={`/products/${item!.image}`}
          className="max-h-[100px] self-end py-3 pr-4"
        />
        <QuantityControlButton id={id} />
      </div>
    </>
  );
}
