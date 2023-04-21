/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductListActions, ProductListAction } from './product-list.actions';
import { ProductListService } from '../../services/product-list.service';
import { ProductsToProductsTableDataAdapter } from '../../adapters/products-to-products-table-data.adapter';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductListEffects {
  productListGet$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductListAction.getProductList),
      switchMap((action) =>
        this._productListService.getProducts().pipe(
          map((products: Product[]) => {
            return ProductListAction.getProductListSuccess({ products });
          }),
          catchError((error) => {
            console.warn('Error Response', error);
            // Hier Fail Actions feuern und loggen
            return [];
          })
        )
      )
    )
  );

  productListGetSuccess$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductListAction.getProductListSuccess),
      map((products) => {
        return ProductListAction.setProductList({
          productsTableData: this._productsToProductsTableDataAdapter.adapt(
            products.products
          ),
        });
      }),
      catchError((error) => {
        console.warn('Error Response', error);
        return [];
      })
    )
  );

  productGet$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductListAction.getProduct),
      switchMap((action) =>
        this._productListService.getProduct(action.id).pipe(
          map((product: Product) => {
            return ProductListAction.getProductSuccess({ product });
          }),
          catchError((error) => {
            console.warn('Error Response', error);
            return [];
          })
        )
      )
    )
  );

  productGetSuccess$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductListAction.getProductSuccess),
      switchMap((product) => {
        return [ProductListAction.setCurrentProduct(product)];
      }),
      catchError((error) => {
        console.warn('Error Response', error);
        return [];
      })
    )
  );

  putProduct$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductListAction.putProduct),
      switchMap((action) =>
        this._productListService.putProduct(action.product).pipe(
          map((product: Product) => {
            return ProductListAction.putProductSuccess({ product });
          }),
          catchError((error) => {
            console.warn('Error Response', error);
            return [];
          })
        )
      )
    )
  );

  constructor(
    private readonly _actions$: Actions<ProductListActions>,
    private readonly _productListService: ProductListService,
    private readonly _productsToProductsTableDataAdapter: ProductsToProductsTableDataAdapter
  ) {}
}
