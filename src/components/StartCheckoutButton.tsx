import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useCriiptoVerify } from '@criipto/verify-react';
import { Button } from './Button';
import { ArrowRightIcon, BoxOpenFullIcon, CheckIcon } from './Icon';
import { ActionsFooter } from './ActionsFooter';

export default function StartCheckoutButton() {
  const { isCartEmpty, isAgeVerificationChecked, clearCart } =
    useShoppingCart();
  const { result, claims, logout } = useCriiptoVerify();

  // Based on birth year, demo only
  function calculateAge(
    birthdate: string | number | undefined,
  ): number | undefined {
    // NO: birthdate "birthdate": "1946-03-27", "identityscheme": "nobankid-oidc",
    // SE: "identityscheme": "sebankid", "ssn": "196802020575",
    if (birthdate === undefined) {
      return undefined;
    }

    const birthdateStr =
      typeof birthdate === 'number' ? String(birthdate) : birthdate;
    const birthYear = parseInt(birthdateStr.slice(0, 4), 10);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  }

  const isAbove18Norway =
    claims?.identityscheme === 'nobankid-oidc' &&
    calculateAge(claims?.birthdate) !== undefined &&
    calculateAge(claims?.birthdate)! >= 18;
  const isAbove18Finland =
    claims?.identityscheme === 'fitupas' &&
    calculateAge(claims?.birthdate) !== undefined &&
    calculateAge(claims?.birthdate)! >= 18;
  const isAbove18Sweden =
    claims?.identityscheme === 'sebankid' &&
    calculateAge(claims?.ssn) !== undefined &&
    calculateAge(claims?.ssn)! >= 18;
  const isAbove18Denmark =
    claims?.identityscheme === 'dkmitid' &&
    Number(claims?.age) !== undefined &&
    Number(claims?.age)! >= 18;

  const ageVerificationFailed =
    claims &&
    !isAbove18Norway &&
    !isAbove18Sweden &&
    !isAbove18Denmark &&
    !isAbove18Finland;

  return (
    <ActionsFooter className="px-8 py-6">
      {claims && (
        <div className="flex flex-col content-start items-start justify-start pb-6 pt-4">
          <CheckIcon className="h-5 text-primary-600" />
          <div className="text-ledt mt-3 sm:mt-5">
            <h3 className="pt-6 text-xl font-semibold leading-6 text-deep-purple-900">
              Your age has been verified
            </h3>
            {ageVerificationFailed && (
              <div className="mt-2">
                <p className="text-sm text-light-blue-700">
                  Thank you for providing your information. Unfortunately, we
                  cannot proceed with your order as you do not meet the legal
                  age requirements for purchasing alcohol in your country. If
                  you have any questions or concerns, please contact our support
                  team. We appreciate your understanding and commitment to
                  responsible consumption.
                </p>
              </div>
            )}
            {isAgeVerificationChecked && !ageVerificationFailed && (
              <div className="mt-2">
                <p className="text-sm text-light-blue-700">
                  And your profile has been updated.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      {claims !== null && (
        <Button
          variant="primary"
          disabled={isCartEmpty}
          onClick={() => {
            clearCart();
            logout({
              redirectUri: `${window.location.origin}/callback?to=${btoa('/checkout/details')}`,
            });
          }}
        >
          Checkout
          <ArrowRightIcon className="ml-2 h-4" />
        </Button>
      )}
      {claims === null && (
        <Link to="/cart/checkout" tabIndex={-1}>
          <Button variant="primary" disabled={isCartEmpty}>
            Checkout
            <ArrowRightIcon className="ml-2 h-4" />
          </Button>
        </Link>
      )}
      <Link to="/" tabIndex={-1}>
        <Button
          variant="default"
          onClick={() => {
            if (result) {
              logout({
                redirectUri: `${window.location.origin}/callback?to=${btoa('/')}`,
              });
            }
          }}
        >
          <BoxOpenFullIcon className="mr-2 h-5 w-5" />
          Continue Shopping
        </Button>
      </Link>
    </ActionsFooter>
  );
}
