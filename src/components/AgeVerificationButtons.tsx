import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useCriiptoVerify } from '@criipto/verify-react';
import ageVerificationIcon from '../assets/age-verified-humans.png';
import { Button } from './Button';
import { Checkbox } from './Checkbox';

export default function StartCheckoutButton() {
  const { isCartEmpty, isAgeVerificationChecked, onToggle } = useShoppingCart();
  const { loginWithRedirect } = useCriiptoVerify();

  return (
    <div className="fixed bottom-0 w-full lg:max-w-5xl bg-white p-4 bg-white py-6 shadow-inner bg-gray-300">
      <div className="flex flex-col items-start content-start justify-start pt-4 mx-4">
        <img
          src={ageVerificationIcon}
          className="h-6 w-[30px]"
          aria-hidden="true"
        />
        <div>
          <h3 className="font-semibold leading-6 text-deep-purple-900 text-xl pt-6">Age restricted items</h3>
          <div className="mt-2">
            <p className="text-sm text-light-blue-700">Your order contains age-restricted items or items that require proof of identity. Please confirm that you are legally eligible to buy these items in your country.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white justify-center items-between gap-2 w-full bottom-0 py-6 px-4">
        <Button
          variant="primary"
          type="button"
          disabled={isCartEmpty}
          onClick={(e) => {
            if (isCartEmpty) {
              e.preventDefault();
            } else {
              loginWithRedirect();
            }
          }}
        >
          Verify your age
        </Button>
        <Link to="/cart" tabIndex={-1}>
          <Button variant="default">Cancel</Button>
        </Link>
        <Checkbox className="border border-light-blue-100" checked={isAgeVerificationChecked}  onToggle={onToggle}>
          Also update my profile with the age verification
        </Checkbox>
      </div>
    </div>
  );
}
