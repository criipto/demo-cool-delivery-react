import { useShoppingCart } from 'context/ShoppingCartContext';
import boxIcon from '../assets/box-icon-white.png';
import { Link } from 'react-router-dom';

export default function ViewCartButton() {
  const { cartTotal, cartQuantity, isCartEmpty } = useShoppingCart();

  return (
    <div className="fixed bottom-0 w-full lg:max-w-5xl">
      <div className="flex flex-col bg-white justify-center content-center items-between align-middle pb-4 h-24">
        <Link
          to={'cart'}
          className={`mx-4 justify-between px-3 text-sm shadow-sm bottom-0 flex content-center py-4 ${isCartEmpty ? 'cta-button-disabled' : 'cta-button-active'}`}
        >
          <div className="flex flex-row justify-around">
            <img
              src={boxIcon}
              className="w-6 h-5"
              alt="box-icon"
            />
            <p className="pl-2">{cartQuantity}</p>
          </div>
          <p className="font-medium">View your cart</p>
          <div>
            <p className="font-normal">{cartTotal},00 kr.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
