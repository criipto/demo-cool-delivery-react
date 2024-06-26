import { useShoppingCart } from '../context/ShoppingCartContext';
import { useLocation } from 'react-router-dom';
import CartItem from '../components/CartItem';
import StartCheckoutButton from '../components/StartCheckoutButton';
import AgeVerificationButtons from '../components/AgeVerificationButtons';
import { BoxOpenFullIcon } from '../components/Icon';

export default function ShoppingCart() {
  const location = useLocation();
  const { cartItems } = useShoppingCart();

  // Check if the current path is "/cart/checkout"
  const isCheckoutPage = location.pathname === '/cart/checkout';

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-[98px] flex-col items-center justify-center bg-white">
        <BoxOpenFullIcon className="h-5 text-primary-600" />
        <h1 className="font-bold">Your Order</h1>
      </header>
      {cartItems.length > 0 ? (
        <div className="mx-2 flex flex-grow flex-col gap-y-2 px-2 pb-40">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-grow flex-col content-center items-center justify-center">
          <BoxOpenFullIcon className="h-16 text-primary-600" />
          <p className="text-md pt-4 text-center font-medium">
            Nothing in your cart yet? <br /> Explore our products and pick your
            favorites.
          </p>
        </div>
      )}
      {isCheckoutPage ? <AgeVerificationButtons /> : <StartCheckoutButton />}
    </div>
  );
}
