import { useShoppingCart } from '../context/ShoppingCartContext';
import { useLocation } from 'react-router-dom';
import CartItem from '../components/CartItem';
import StartCheckoutButton from '../components/StartCheckoutButton';
import AgeVerificationButtons from '../components/AgeVerificationButtons';
import boxIcon from '../assets/box-open-full-solid.png';
import boxOutlineIcon from '../assets/box-open-full.png';

export default function ShoppingCart() {
  const location = useLocation();
  const { cartItems } = useShoppingCart();

  const isVerifyPage = location.pathname === '/cart/verify';

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white h-[98px] flex flex-col items-center justify-center">
        <img
          src={boxIcon}
          className="h-5 w-[25px]"
        />
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
        <div className="flex flex-col justify-center items-center flex-grow">
          <img
            src={boxOutlineIcon}
            className="h-16 w-20"
          />
          <p className="text-center font-medium text-md pt-4">
            Nothing in your cart yet? <br /> Explore our products and pick your favorites.
          </p>
        </div>
      )}
      {isVerifyPage ? <AgeVerificationButtons /> : <StartCheckoutButton />}
    </div>
  );
}
