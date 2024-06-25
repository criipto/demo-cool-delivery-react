import { useShoppingCart } from 'context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpenFull } from '@fortawesome/sharp-light-svg-icons';

export default function ViewCartButton() {
  const { cartTotal, cartQuantity, isCartEmpty } = useShoppingCart();

  return (
    <div className="fixed bottom-0 w-full lg:max-w-5xl">
      <div className="flex flex-col bg-white justify-center pb-8 pt-4 px-4">
        <Link to="/cart" tabIndex={-1}>
          <Button variant="primary" disabled={isCartEmpty} className="justify-between">
            <div className="flex font-semibold">
              <FontAwesomeIcon className="h-5" icon={faBoxOpenFull} />
              <p className="pl-2">{cartQuantity}</p>
            </div>
            <p className="font-medium">View your cart</p>
            <p className="font-normal">{cartTotal},00 kr.</p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
