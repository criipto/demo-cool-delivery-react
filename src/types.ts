export interface EnvProps {
  onToggleEnv: () => void;
  currentEnvironment: string;
}

export interface Product {
  id: number;
  volume: string;
  name: string;
  abv: string;
  price: number;
  image: string;
  quantity: number;
}
