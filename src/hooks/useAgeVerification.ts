import { CartItem, useShoppingCart } from '../context/ShoppingCartContext';
import { useCriiptoVerify } from '@criipto/verify-react';
import { Claims } from '@criipto/verify-react/dist/context';
import { productsData } from '../products';
import { useCountry } from '../context/CountryContext';
import useLocalStorage from './useLocalStorage';

export const ages = [15, 16, 18, 21] as const;
export type Age = (typeof ages)[number];
export type Scope = `is_over_${Age}`;

export type AgeClaims = Record<Age, boolean>;

type AgeVerificationClaim = Record<Scope, boolean> & {
  country: string;
};

type AgeVerificationClaims = Claims & {
  'http://ageverification.criipto.com': AgeVerificationClaim;
};

function decideRequiredAge(
  cartItems: CartItem[],
  country: string | undefined,
): Age | null {
  const abvs = cartItems
    .map((item) => {
      return productsData.beers.find((product) => product.id === item.id)?.abv;
    })
    .filter((abv) => abv != null);
  const maxAbv = Math.max(...abvs);

  if (country === 'DK') {
    if (maxAbv >= 16.5) return 18;
    if (maxAbv >= 1.2) return 16;
    return null;
  }

  // At the time of writing it has been decided not implement the cases for the other countries and just go with 18+
  return 18;
}

export function useAgeVerification() {
  const { cartItems } = useShoppingCart();
  const { country: selectedCountry } = useCountry();
  const { claims, loginWithRedirect } = useCriiptoVerify();

  const hasPerformedAgeVerification = claims != null;

  const ageVerificationClaim = (claims as AgeVerificationClaims | null)?.[
    'http://ageverification.criipto.com'
  ];
  const ageClaims = parseClaims(ageVerificationClaim);

  const country = hasPerformedAgeVerification
    ? ageVerificationClaim?.country
    : selectedCountry ?? undefined;

  const requiredAge = decideRequiredAge(cartItems, country);
  const needsAgeVerification = requiredAge !== null;

  const ageVerificationPassed =
    needsAgeVerification && ageClaims?.[requiredAge] === true;
  const shouldShowAgeVerification =
    needsAgeVerification && !ageVerificationPassed;

  // Update profile toggle
  const [
    isUpdateAgeVerificationProfileChecked,
    setIsUpdateAgeVerificationProfileChecked,
  ] = useLocalStorage<boolean>('isUpdateAgeVerificationProfileChecked', true);

  const onUpdateAgeVerificationProfileToggle = () => {
    setIsUpdateAgeVerificationProfileChecked((prevIsChecked) => !prevIsChecked);
  };

  return {
    ageClaims,
    requiredAge,
    ageVerificationPassed,
    needsAgeVerification,
    hasPerformedAgeVerification,
    shouldShowAgeVerification,
    isUpdateAgeVerificationProfileChecked,
    onUpdateAgeVerificationProfileToggle,
    login: (): void => {
      loginWithRedirect({
        redirectUri: `${window.location.origin}/callback`,
        state: btoa('/cart'),
        acrValues: 'urn:age-verification',
        scope: `openid ${ages.map((age) => `is_over_${age}`).join(' ')}`,
        loginHint: country != null ? `country:${country}` : undefined,
      });
    },
  };
}

function parseClaims(
  claims: AgeVerificationClaim | undefined,
): AgeClaims | undefined {
  if (claims === undefined) return undefined;

  const parsedClaims: Partial<AgeClaims> = {};

  for (const age of ages) {
    parsedClaims[age] = claims?.[`is_over_${age}`] ?? false;
  }

  return parsedClaims as AgeClaims | undefined;
}
