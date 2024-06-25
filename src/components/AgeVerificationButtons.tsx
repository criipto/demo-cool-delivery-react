import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useCriiptoVerify } from '@criipto/verify-react';
import checkmark from '../assets/checkmark.png';
import ageVerificationIcon from '../assets/age-verified-humans.png';

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
          <h3 className="font-semibold leading-6 text-deepPurple-900 text-xl pt-6">Age restricted items</h3>
          <div className="mt-2">
            <p className="text-sm text-lightBlue-700">Your order contains age-restricted items or items that require proof of identity. Please confirm that you are legally eligible to buy these items in your country.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col bg-white justify-center items-between gap-2 w-full bottom-0 py-6">
          <button
            type="button"
            className={`mx-4 text-white h-12 justify-center bg-primary-600 py-2 text-sm shadow-sm ${isCartEmpty ? 'cta-button-disabled' : 'cta-button-active'}`}
            onClick={(e) => {
              if (isCartEmpty) {
                e.preventDefault();
              } else {
                loginWithRedirect();
              }
            }}
          >
            <div className="flex flex-row items-center justify-center">
              <p className="font-semibold">Verify your age</p>
            </div>
          </button>
          <Link to={'/cart'}>
            <div className="back-button flex flex-row text-lightBlue-800 font-semibold h-12 items-center justify-center py-2 text-sm shadow-sm mx-4 border-lightBlue-700/30 border">Cancel</div>
          </Link>
        </div>
        <div
          className="flex flex-row align-middle mx-4 border border-lightBlue-100 p-2"
          onClick={onToggle}
        >
          <input
            type="checkbox"
            id="checkbox"
            checked={isAgeVerificationChecked}
            disabled={true}
            className="hidden"
          />
          <span className="block w-6 h-6 cursor-pointer bg-lightBlue-100">
            {isAgeVerificationChecked && (
              <img
                src={checkmark}
                className="pt-[3px]"
              />
            )}
          </span>
          <label
            className="text-lightBlue-800 pl-2 text-xs self-center"
            htmlFor="checkbox"
          >
            Also update my profile with the age verification
          </label>
        </div>
      </div>
    </div>
  );
}
