import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useCriiptoVerify } from '@criipto/verify-react';
import { Button } from './Button';
import {
  ArrowRightIcon,
  BoxOpenFullIcon,
  CheckIcon,
  CrossIcon,
  HandIcon,
} from './Icon';
import { ActionsFooter } from './ActionsFooter';
import { useAgeVerification } from '../hooks/useAgeVerification';
import classNames from 'classnames';
import { MouseEventHandler, ReactElement } from 'react';

export default function StartCheckoutButton() {
  return (
    <ActionsFooter className="px-8 py-6">
      <AgeVerificationResult />
      <CheckoutButton />
      <CancelButton />
    </ActionsFooter>
  );
}

function AgeVerificationResult(): ReactElement | null {
  const {
    ageClaims,
    ageVerificationPassed,
    isUpdateAgeVerificationProfileChecked,
    hasPerformedAgeVerification,
  } = useAgeVerification();

  if (!hasPerformedAgeVerification) return null;

  const icon = ageVerificationPassed ? (
    <CheckIcon className="h-5 text-primary-600" />
  ) : (
    <HandIcon className="h-6 text-error-500" />
  );

  const title = ageVerificationPassed
    ? 'You can proceed'
    : 'We can not proceed with your order';

  return (
    <div className="mx-4 flex flex-col items-center gap-4 pb-6 pt-4">
      {icon}
      <div className="flex flex-col items-center text-center">
        <h3 className="text-dark-purple-900 text-xl font-semibold leading-6">
          {title}
        </h3>
        <div className="mt-2 max-w-lg text-sm text-light-blue-700">
          {ageVerificationPassed && (
            <p>
              <span>
                Your age has been verified and you meet the legal requirements.
              </span>
              {isUpdateAgeVerificationProfileChecked && (
                <span> Your profile has been updated.</span>
              )}
            </p>
          )}
          {!ageVerificationPassed && (
            <p>
              <span>Thank you for providing your information.</span>
              <br />
              <span>
                Unfortunately, we cannot proceed with your order as you do not
                meet the legal age requirements for purchasing alcohol in your
                country. If you have any questions or concerns, please contact
                our support team. We appreciate your understanding and
                commitment to responsible consumption.
              </span>
            </p>
          )}
        </div>
      </div>
      {ageClaims && (
        <div className="space-y-1">
          {Object.entries(ageClaims).map(([age, passed]) => (
            <div key={age} className="flex items-center gap-4">
              <span
                className={classNames('font-semibold', {
                  'text-light-blue-900': passed,
                  'text-light-blue-500': !passed,
                })}
              >
                {age}+
              </span>
              {passed ? (
                <CheckIcon className="h-5 w-5 text-success-500" />
              ) : (
                <CrossIcon className="h-5 w-5 text-error-600" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CheckoutButton(): ReactElement | null {
  const { isCartEmpty } = useShoppingCart();
  const {
    shouldShowAgeVerification,
    hasPerformedAgeVerification,
    ageVerificationPassed,
  } = useAgeVerification();
  const { logout } = useCriiptoVerify();

  const shouldShow = hasPerformedAgeVerification ? ageVerificationPassed : true;

  if (!shouldShow) return null;

  const to = shouldShowAgeVerification ? '/cart/checkout' : '/checkout/details';

  const onLinkClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    if (!shouldShowAgeVerification) {
      evt.preventDefault();
      logout({
        redirectUri: `${window.location.origin}/callback`,
        state: btoa('/checkout/details'),
      });
    }
  };

  return (
    <Link to={to} onClick={onLinkClick} tabIndex={-1}>
      <Button variant="primary" disabled={isCartEmpty}>
        Checkout
        <ArrowRightIcon className="ml-2 h-4" />
      </Button>
    </Link>
  );
}

function CancelButton(): ReactElement {
  const { clearCart } = useShoppingCart();
  const { ageVerificationPassed, hasPerformedAgeVerification } =
    useAgeVerification();
  const { result, logout } = useCriiptoVerify();

  return (
    <Link
      to="/"
      tabIndex={-1}
      onClick={(evt) => {
        if (hasPerformedAgeVerification && !ageVerificationPassed) {
          clearCart();
        }
        if (result) {
          evt.preventDefault();
          logout({
            redirectUri: `${window.location.origin}/callback`,
            state: btoa('/'),
          });
        }
      }}
    >
      <Button variant="default">
        <BoxOpenFullIcon className="mr-2 h-5 w-5" />
        {hasPerformedAgeVerification && !ageVerificationPassed ? (
          <span>Clear cart</span>
        ) : (
          <span>Continue Shopping</span>
        )}
      </Button>
    </Link>
  );
}
