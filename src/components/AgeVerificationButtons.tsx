import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useCriiptoVerify } from '@criipto/verify-react';
import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { ChildrenIcon } from './Icon';
import { useCountry } from '../context/CountryContext';

export default function StartCheckoutButton() {
  const { isCartEmpty, isAgeVerificationChecked, onToggle } = useShoppingCart();
  const { loginWithRedirect } = useCriiptoVerify();
  const { country } = useCountry();

  return (
    <div className="fixed bottom-0 w-full bg-gray-300 bg-white p-4 py-6 shadow-inner lg:max-w-5xl">
      <div className="mx-4 flex flex-col content-start items-start justify-start pt-4">
        <ChildrenIcon className="h-6 text-primary-500" />
        <div>
          <h3 className="pt-6 text-xl font-semibold leading-6 text-deep-purple-900">
            Age restricted items
          </h3>
          <div className="mt-2">
            <p className="text-sm text-light-blue-700">
              Your order contains age-restricted items or items that require
              proof of identity. Please confirm that you are legally eligible to
              buy these items in your country.
            </p>
          </div>
        </div>
      </div>
      <div className="items-between bottom-0 flex w-full flex-col justify-center gap-2 bg-white px-4 py-6">
        <Button
          variant="primary"
          type="button"
          disabled={isCartEmpty}
          onClick={(e) => {
            if (isCartEmpty) {
              e.preventDefault();
            } else {
              loginWithRedirect({
                loginHint: country != null ? `country:${country}` : undefined,
              });
            }
          }}
        >
          Verify your age
        </Button>
        <Link to="/cart" tabIndex={-1}>
          <Button variant="default">Cancel</Button>
        </Link>
        <Checkbox
          className="border border-light-blue-100"
          checked={isAgeVerificationChecked}
          onToggle={onToggle}
        >
          Also update my profile with the age verification
        </Checkbox>
      </div>
    </div>
  );
}
