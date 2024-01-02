import boxIcon from '../assets/box-checkout-blue.png';
import arrow from '../assets/arrow-white.png';
import checkMark from '../assets/checkmark.png';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useCriiptoVerify } from '@criipto/verify-react';

export default function StartCheckoutButton() {
  const { isCartEmpty, isAgeVerificationChecked } = useShoppingCart();
  const { result, claims, logout } = useCriiptoVerify();
  const handleLogout = () => {
    logout({ redirectUri: window.location.origin + '/' });
  };

  // Based on birth year, demo only
  function calculateAge(birthdate: string | number | undefined): number | undefined {
    // NO: birthdate "birthdate": "1946-03-27", "identityscheme": "nobankid-oidc",
    // SE: "identityscheme": "sebankid", "ssn": "196802020575",
    if (birthdate === undefined) {
      return undefined;
    }

    const birthdateStr = typeof birthdate === 'number' ? String(birthdate) : birthdate;
    const birthYear = parseInt(birthdateStr.slice(0, 4), 10);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  }

  const isAbove18Norway = claims?.identityscheme === 'nobankid-oidc' && calculateAge(claims?.birthdate) !== undefined && calculateAge(claims?.birthdate)! >= 18;
  const isAbove18Sweden = claims?.identityscheme === 'sebankid' && calculateAge(claims?.ssn) !== undefined && calculateAge(claims?.ssn)! >= 18;
  const isAbove18Denmark = claims?.identityscheme === 'dkmitid' && Number(claims?.age) !== undefined && Number(claims?.age)! >= 18;

  const ageVerificationFailed = claims && !isAbove18Norway && !isAbove18Sweden && !isAbove18Denmark;

  return (
    <div className="fixed bottom-0 w-full lg:max-w-5xl bg-white p-4 bg-white py-6 shadow-inner bg-gray-300">
      {claims && (
        <div className="flex flex-col items-start content-start justify-start pt-4 pb-6 mx-4">
          <img
            src={checkMark}
            className="h-5 w-6"
            aria-hidden="true"
          />
          <div className="mt-3 text-ledt sm:mt-5">
            <h3 className="font-semibold leading-6 text-base900DarkPurple text-xl pt-6">Your age has been verified</h3>
            {ageVerificationFailed && (
              <div className="mt-2">
                <p className="text-sm text-lightBlue700">
                  Thank you for providing your information. Unfortunately, we cannot proceed with your order as you do not meet the legal age requirements for purchasing alcohol in your country. If you have any questions or concerns, please contact
                  our support team. We appreciate your understanding and commitment to responsible consumption.
                </p>
              </div>
            )}
            {isAgeVerificationChecked && !ageVerificationFailed && (
              <div className="mt-2">
                <p className="text-sm text-lightBlue700">And your profile has been updated.</p>
              </div>
            )}
          </div>
        </div>
      )}
      <Link to={'checkout'}>
        <div
          onClick={(e) => (isCartEmpty || result) && e.preventDefault()}
          className={`mx-4 text-white h-12 justify-center py-2 text-sm flex flex-row items-center mb-2 ${isCartEmpty ? 'cta-button-disabled' : 'cta-button-active'}`}
        >
          <p className="font-semibold">Checkout</p>
          <img
            src={arrow}
            className="w-[14px] h-4 ml-2"
          />
        </div>
      </Link>
      <Link to={'/'}>
        <div
          onClick={() => result && handleLogout()}
          className="back-button flex flex-row text-lightBlue800 h-12 items-center justify-center bg-white py-2 text-sm shadow-sm mx-4 border-lightBlue700/30 border"
        >
          <img
            src={boxIcon}
            className="w-5 h-4 mr-[6px]"
          />
          <p className="font-semibold">Continue Shopping</p>
        </div>
      </Link>
    </div>
  );
}
