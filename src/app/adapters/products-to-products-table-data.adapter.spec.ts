import { mockProducts } from '../../testing/mockProducts';
import { ProductsToProductsTableDataAdapter } from './products-to-products-table-data.adapter';
import { mockProductListTableData } from '../../testing/mockProductListTableData';

describe('ProductsToProductsTableDataAdapter', () => {
  describe('adapt', () => {
    it('should adapt data from Product[] to ProductListTableRow[]', () => {
      const service = new ProductsToProductsTableDataAdapter();
      const result = service.adapt(mockProducts);
      expect(result).toStrictEqual(mockProductListTableData);
    });
  });
});
