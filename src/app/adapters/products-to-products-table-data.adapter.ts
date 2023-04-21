import { Injectable } from '@angular/core';
import { ProductListTableRow } from '@digistore/ui';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsToProductsTableDataAdapter {
  adapt(adaptee: Product[]): ProductListTableRow[] {
    return adaptee.map((product) => {
      return {
        id: product.id,
        product: product.product,
        manufacturer: product.manufacturer,
        category: product.category,
        price: product.price,
        sale: product.sale ? 'Sale' : 'not in Sale',
        image: product.image,
      };
    });
  }
}
