import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useCriiptoVerify } from '@criipto/verify-react';
import checkmark from '../assets/checkmark.png';
import ageVerificationIcon from '../assets/age-verified-humans.png';
import { useCountry } from '../context/CountryContext';
import { Button } from './Button';

export default function AgeVerificationButtons() {
  const { isCartEmpty, isAgeVerificationChecked, onToggle } = useShoppingCart();
  const { loginWithRedirect } = useCriiptoVerify();
  const { country } = useCountry();

  return (
    <div className="fixed bottom-0 w-full lg:max-w-5xl bg-white p-4 bg-white py-6 shadow-inner bg-gray-300">
      <div className="flex flex-col items-start content-start justify-start pt-4 mx-4">
        <img
          src={ageVerificationIcon}
          className="h-6 w-[30px]"
          aria-hidden="true"
        />
        <div>
          <h3 className="font-semibold leading-6 text-base900DarkPurple text-xl pt-6">Age restricted items</h3>
          <div className="mt-2">
            <p className="text-sm text-lightBlue700">Your order contains age-restricted items or items that require proof of identity. Please confirm that you are legally eligible to buy these items in your country.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col bg-white justify-center items-between gap-2 w-full bottom-0 py-6 px-4">
          <Button
            type="button"
            variant="primary"
            disabled={isCartEmpty}
            onClick={(e) => {
              e.preventDefault();

              if (isCartEmpty) return;

              loginWithRedirect({
                acrValues: 'urn:age-verification',
                scope: 'openid is_over_15 is_over_16 is_over_18 is_over_21 is_over_65',
                loginHint: country != null ? `country:${country}` : undefined,
              });
            }}
          >
            Verify your age
          </Button>
          <Link to="/cart" tabIndex={-1}>
            <Button variant="default">Cancel</Button>
          </Link>
        </div>
        <div
          className="flex flex-row align-middle mx-4 border border-lightBlue100 p-2"
          onClick={onToggle}
        >
          <input
            type="checkbox"
            id="checkbox"
            checked={isAgeVerificationChecked}
            disabled
            className="hidden"
          />
          <span className="block w-6 h-6 cursor-pointer bg-lightBlue100">
            {isAgeVerificationChecked && (
              <img
                src={checkmark}
                className="pt-[3px]"
              />
            )}
          </span>
          <label
            className="text-lightBlue800 pl-2 text-xs self-center"
            htmlFor="checkbox"
          >
            Also update my profile with the age verification
          </label>
        </div>
      </div>
    </div>
  );
}
