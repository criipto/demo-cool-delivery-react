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
      <div className="relative bg-primary25 flex justify-between items-center h-[124px]">
        <div className="p-3">
          <div className="pb-3">
            <h1 className="font-bold text-[15px]">
              {item!.volume} {item!.name}
            </h1>
            <p className="text-lightBlue text-sm"><AbvLabel>{item!.abv}</AbvLabel></p>
          </div>
          <p className="font-medium text-[15px]">{totalItemPrice(item!.price, quantity)},00 kr</p>
        </div>
        <img
          src={`/products/${item!.image}`}
          className="max-h-[100px] py-3 pr-4 self-end"
        />
        <QuantityControlButton id={id} />
      </div>
    </>
  );
}
