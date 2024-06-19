import { CartItem } from '../context/ShoppingCartContext';
import { useCriiptoVerify } from '@criipto/verify-react';
import { Claims } from '@criipto/verify-react/dist/context';
import { productsData } from '../products';
import { useCountry } from '../context/CountryContext';

export type Scopes = 'is_over_15' | 'is_over_16' | 'is_over_18' | 'is_over_21' | 'is_over_65';

type AgeVerificationClaims = Claims & {
  'http://ageverification.criipto.com': Record<Scopes, boolean> & {
    country: string;
  }
};

function decideScope(cartItems: CartItem[], country: string | undefined): keyof AgeVerificationClaims['http://ageverification.criipto.com'] | null {
  const abvs = cartItems.map((item) => productsData.beers.find((product) => product.id === item.id)?.abv).filter((abv): abv is number => abv != null);
  const maxAbv = Math.max(...abvs);

  if(country === 'DK') {
    if(maxAbv >= 16.5) return 'is_over_18';
    if(maxAbv >= 1.2) return 'is_over_16';
    return null;
  }

  // At the time of writing it has been decided not implement the cases for the other countries and just go with 18+
  return 'is_over_18';
}

export function useAgeVerification(cartItems: CartItem[]) {
  const { country: selectedCountry } = useCountry();
  const { claims } = useCriiptoVerify();

  const ageVerificationClaim = (claims as AgeVerificationClaims | null)?.['http://ageverification.criipto.com'];
  const hasPerformedAgeVerification = claims != null;

  const scope = decideScope(cartItems, hasPerformedAgeVerification ? ageVerificationClaim?.country : (selectedCountry ?? undefined));

  const needsAgeVerification = scope !== null;
  const ageVerificationPassed = needsAgeVerification && ageVerificationClaim?.[scope] === true;

  const shouldShowAgeVerification = (needsAgeVerification && !ageVerificationPassed);

  return { ageVerificationPassed, needsAgeVerification, hasPerformedAgeVerification, shouldShowAgeVerification };
}
