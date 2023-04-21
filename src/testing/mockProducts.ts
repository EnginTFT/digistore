import { Product } from '../app/models/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    product: 'test',
    manufacturer: 'test',
    description: 'test',
    category: ['test'],
    price: '1',
    sale: false,
    image: 'test',
  },
  {
    id: '2',
    product: 'test2',
    manufacturer: 'test2',
    description: 'test2',
    category: ['test2'],
    price: '2',
    sale: true,
    image: 'test2',
  },
];
