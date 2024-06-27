export interface EnvProps {
  onToggleEnv: () => void;
  currentEnvironment: string;
}

export interface Product {
  id: number;
  volume: string;
  name: string;
  abv: number;
  price: number;
  image: string;
  quantity: number;
}
