import { useShoppingCart } from '../context/ShoppingCartContext';
import { useLocation } from 'react-router-dom';
import CartItem from '../components/CartItem';
import StartCheckoutButton from '../components/StartCheckoutButton';
import AgeVerificationButtons from '../components/AgeVerificationButtons';
import boxIcon from '../assets/box-open-full-solid.png';
import boxOutlineIcon from '../assets/box-open-full.png';
import Header from '../components/Header';
import { EnvProps } from '../types';

export default function ShoppingCart({ onToggleEnv, currentEnvironment }: EnvProps) {
  const location = useLocation();
  const { cartItems } = useShoppingCart();

  // Check if the current path is "/cart/checkout"
  const isCheckoutPage = location.pathname === '/cart/checkout';

  return (
    <div className="flex flex-col min-h-screen">
      <Header onToggleEnv={onToggleEnv} currentEnvironment={currentEnvironment} />
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
      {isCheckoutPage ? <AgeVerificationButtons /> : <StartCheckoutButton />}
    </div>
  );
}
