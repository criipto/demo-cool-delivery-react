import { CartItem } from '../context/ShoppingCartContext';
import { useCriiptoVerify } from '@criipto/verify-react';
import { Claims } from '@criipto/verify-react/dist/context';
import { productsData } from '../products';
import { useCountry } from '../context/CountryContext';
import useLocalStorage from './useLocalStorage';

export const ages = [15, 16, 18, 21, 65] as const;
export type Age = (typeof ages)[number];
export type Scope = `is_over_${Age}`;

type AgeVerificationClaim = Record<Scope, boolean> & {
  country: string;
};

type AgeVerificationClaims = Claims & {
  'http://ageverification.criipto.com': AgeVerificationClaim
};

function decideRequiredAge(cartItems: CartItem[], country: string | undefined): Age | null {
  const abvs = cartItems.map((item) => productsData.beers.find((product) => product.id === item.id)?.abv).filter((abv): abv is number => abv != null);
  const maxAbv = Math.max(...abvs);

  if(country === 'DK') {
    if(maxAbv >= 16.5) return 18;
    if(maxAbv >= 1.2) return 16;
    return null;
  }

  // At the time of writing it has been decided not implement the cases for the other countries and just go with 18+
  return 18;
}

export function useAgeVerification(cartItems: CartItem[]) {
  const { country: selectedCountry } = useCountry();
  const { claims } = useCriiptoVerify();

  const ageVerificationClaim = (claims as AgeVerificationClaims | null)?.['http://ageverification.criipto.com'];
  const hasPerformedAgeVerification = claims != null;
  const ageClaims = parseClaims(ageVerificationClaim);

  const country = hasPerformedAgeVerification ? ageVerificationClaim?.country : (selectedCountry ?? undefined);
  const requiredAge = decideRequiredAge(cartItems, country);
  const needsAgeVerification = requiredAge !== null;

  const ageVerificationPassed = needsAgeVerification && ageClaims?.[requiredAge] === true;
  const shouldShowAgeVerification = (needsAgeVerification && !ageVerificationPassed);

  // Update profile toggle
  const [isUpdateAgeVerificationProfileChecked, setIsUpdateAgeVerificationProfileChecked] = useLocalStorage<boolean>('isUpdateAgeVerificationProfileChecked', true);

  const onUpdateAgeVerificationProfileToggle = () => {
    setIsUpdateAgeVerificationProfileChecked((prevIsChecked) => !prevIsChecked);
  };

  return {
    requiredAge,
    ageVerificationPassed,
    needsAgeVerification,
    hasPerformedAgeVerification,
    shouldShowAgeVerification,
    isUpdateAgeVerificationProfileChecked,
    onUpdateAgeVerificationProfileToggle
  };
}

function parseClaims(claims: AgeVerificationClaim | undefined): Record<Age, boolean> {
  const parsedClaims: Partial<Record<Age, boolean>> = {};

  for(const age of ages) {
    parsedClaims[age] = claims?.[`is_over_${age}`] ?? false;
  }

  return parsedClaims as Record<Age, boolean>;
}
