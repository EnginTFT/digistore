import { ProductListTableRow } from '@digistore/ui';

export const mockProductListTableData: ProductListTableRow[] = [
  {
    id: '1',
    product: 'test',
    manufacturer: 'test',
    category: ['test'],
    price: '1',
    sale: 'not in Sale',
    image: 'test',
  },
  {
    id: '2',
    product: 'test2',
    manufacturer: 'test2',
    category: ['test2'],
    price: '2',
    sale: 'Sale',
    image: 'test2',
  },
];

export const mockProductListTableDataRow: ProductListTableRow = {
  id: '1',
  product: 'test',
  manufacturer: 'test',
  category: ['test'],
  price: '1',
  sale: 'not in Sale',
  image: 'test',
};
