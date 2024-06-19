import { ReactNode, createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const availableCountries = ['DK', 'SE', 'NO', 'FI'] as const;
export type Country = (typeof availableCountries)[number];

type CountryProviderProps = {
  children: ReactNode;
};

type CountryContext = {
  country: Country | null;
  setCountry: (newCountry: Country) => void;
};

const CountryContext = createContext({} as CountryContext);

export function useCountry() {
  return useContext(CountryContext);
}

export function CountryProvider({ children }: CountryProviderProps) {
  const [country, setCountry] = useLocalStorage<Country | null>('selected-country', null);

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
}
