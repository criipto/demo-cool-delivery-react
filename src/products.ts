import { Product } from './types';

export const productsData = {
  beers: [
    {
      id: 1,
      volume: '0,50 L',
      name: 'Carlsberg 47',
      abv: 7.0,
      price: 23,
      image: 'Carlsberg-47.png',
      quantity: 0,
    },
    {
      id: 2,
      volume: '0,50 L',
      name: 'Carlsberg Elephant',
      abv: 7.2,
      price: 12,
      image: 'Carlsberg-Elephant.png',
      quantity: 0,
    },
    {
      id: 3,
      volume: '0,50 L',
      name: 'Carlsberg Nordic',
      abv: 0.5,
      price: 12,
      image: 'Carlsberg-Nordic.png',
      quantity: 0,
    },
    {
      id: 4,
      volume: '0,50 L',
      name: 'Carlsberg pilsner',
      abv: 4.6,
      price: 9,
      image: 'Carlsberg-pilsner.png',
      quantity: 0,
    },
    {
      id: 5,
      volume: '0,50 L',
      name: 'Jacobsen Maj Bock',
      abv: 3.5,
      price: 12,
      image: 'Jacobsen-Maj-Bock.png',
      quantity: 0,
    },
  ],
} as const satisfies { beers: Product[] };
