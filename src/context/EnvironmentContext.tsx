import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

export type Environment = 'test' | 'production';

type EnvironmentContext = {
  environment: Environment;
  setEnvironment: (newEnvironment: Environment) => void;
  toggleEnvironment: () => void;
};

const EnvironmentContext = createContext({} as EnvironmentContext);

export function useEnvironment() {
  return useContext(EnvironmentContext);
}

type EnvironmentProviderProps = {
  children: ReactNode;
};

export function EnvironmentProvider({ children }: EnvironmentProviderProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [environment, _setEnvironment] = useState<Environment>(
    (searchParams.get('environment') as Environment) ?? 'test',
  );

  const setEnvironment = (newEnvironment: Environment): void => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('environment', newEnvironment);
    setSearchParams(newParams);
    _setEnvironment(newEnvironment);
  };

  const toggleEnvironment = (): void => {
    setEnvironment(environment !== 'production' ? 'production' : 'test');
  };

  return (
    <EnvironmentContext.Provider
      value={{ environment, setEnvironment, toggleEnvironment }}
    >
      {children}
    </EnvironmentContext.Provider>
  );
}
