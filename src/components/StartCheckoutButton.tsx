import boxIcon from '../assets/box-checkout-blue.png';
import checkMark from '../assets/checkmark.png';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useCriiptoVerify } from '@criipto/verify-react';
import { ages, useAgeVerification } from '../hooks/useAgeVerification';
import { Button } from './Button';

export default function StartCheckoutButton() {
  const { isCartEmpty, cartItems, clearCart } = useShoppingCart();
  const {
    requiredAge,
    ageVerificationPassed,
    shouldShowAgeVerification,
    hasPerformedAgeVerification,
    isUpdateAgeVerificationProfileChecked,
  } = useAgeVerification(cartItems);

  const { result, logout } = useCriiptoVerify();

  return (
    <div className="fixed bottom-0 w-full lg:max-w-5xl bg-white p-4 bg-white py-6 shadow-inner bg-gray-300">
      {hasPerformedAgeVerification && (
        <div className="flex flex-col items-center pt-4 pb-6 mx-4 gap-4">
          <img
            src={checkMark}
            className="h-5 w-6 mt-0.5"
            aria-hidden="true"
          />
          <div className="flex flex-col items-center">
            <h3 className="font-semibold leading-6 text-base900DarkPurple text-xl">Your age has been verified</h3>
            <div className="mt-2 text-sm text-lightBlue700">
              {(!ageVerificationPassed) && (
                <p>
                  Thank you for providing your information. Unfortunately, we cannot proceed with your order as you do not meet the legal age requirements for purchasing alcohol in your country. If you have any questions or concerns, please contact
                  our support team. We appreciate your understanding and commitment to responsible consumption.
                </p>
              )}
              {(isUpdateAgeVerificationProfileChecked && ageVerificationPassed) && (
                <p>And your profile has been updated.</p>
              )}
            </div>
          </div>
          <div>
            {ages.map((age) => (
              <div className="flex items-center gap-2">
                {age}+ {age <= requiredAge! ? <div>yes</div> : <div>no</div>}
              </div>
            ))}
          </div>
        </div>
      )}
      <Link to={!shouldShowAgeVerification ? "/order-completed" : "/cart/verify"} tabIndex={-1}>
        <Button
          variant="primary"
          disabled={isCartEmpty || (shouldShowAgeVerification && result !== null)}
          withArrow
          onClick={() => {
            if(shouldShowAgeVerification) return;

            clearCart();

            if(result) {
              logout({ redirectUri: window.location.origin + '/order-completed' });
            }
          }}
        >
          <p className="font-semibold">Checkout</p>
        </Button>
      </Link>
      <Link
        to="/" tabIndex={-1} onClick={() => {
          if(!ageVerificationPassed){
            clearCart();
            logout({ redirectUri: window.location.origin });
          }
        }}
      >
        <Button variant="default">
          <img
            src={boxIcon}
            className="w-5 h-4 mr-[6px]"
          />
          <p className="font-semibold">Continue Shopping</p>
        </Button>
      </Link>
    </div>
  );
}
