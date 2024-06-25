import { useShoppingCart } from '../context/ShoppingCartContext';
import { useLocation } from 'react-router-dom';
import CartItem from '../components/CartItem';
import StartCheckoutButton from '../components/StartCheckoutButton';
import AgeVerificationButtons from '../components/AgeVerificationButtons';
import { faBoxOpenFull as faBoxOpenFullSolid } from '@fortawesome/sharp-solid-svg-icons';
import { faBoxOpenFull as faBoxOpenFullThin } from '@fortawesome/sharp-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ShoppingCart() {
  const location = useLocation();
  const { cartItems } = useShoppingCart();

  // Check if the current path is "/cart/checkout"
  const isCheckoutPage = location.pathname === '/cart/checkout';

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white h-[98px] flex flex-col items-center justify-center">
        <FontAwesomeIcon className="h-5 text-primary-600" icon={faBoxOpenFullSolid} />
        <h1 className="font-bold">Your Order</h1>
      </header>
      {cartItems.length > 0 ? (
        <div className="flex flex-col flex-grow gap-y-2 px-2 mx-2 pb-40">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              {...item}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center content-center flex-grow">
          <FontAwesomeIcon className="h-16 text-primary-600" icon={faBoxOpenFullThin} />
          <p className="text-center font-medium text-md pt-4">
            Nothing in your cart yet? <br /> Explore our products and pick your favorites.
          </p>
        </div>
      )}
      {isCheckoutPage ? <AgeVerificationButtons /> : <StartCheckoutButton />}
    </div>
  );
}
