import { createSelector } from '@ngrx/store';
import { AppSelector } from '../app.selector';
import { productListStoreKey } from './product-list.reducer';

export class ProductListSelector {
  static readonly state = createSelector(
    AppSelector.state,
    (state) => state[productListStoreKey]
  );

  static readonly productsTableData = createSelector(
    ProductListSelector.state,
    (state) => state.productsTableData
  );

  static readonly currentProduct = createSelector(
    ProductListSelector.state,
    (state) => state.currentProduct
  );

  static readonly productListLoading = createSelector(
    ProductListSelector.state,
    (state) => state.status.productTableData.loading
  );

  static readonly productListLoaded = createSelector(
    ProductListSelector.state,
    (state) => state.status.productTableData.loaded
  );

  static readonly productListSuccess = createSelector(
    ProductListSelector.state,
    (state) => state.status.productTableData.success
  );

  static readonly currentProductLoading = createSelector(
    ProductListSelector.state,
    (state) => state.status.currentProduct.loading
  );

  static readonly currentProductLoaded = createSelector(
    ProductListSelector.state,
    (state) => state.status.currentProduct.loaded
  );

  static readonly currentProductSuccess = createSelector(
    ProductListSelector.state,
    (state) => state.status.currentProduct.success
  );

  static readonly putProductSuccess = createSelector(
    ProductListSelector.state,
    (state) => state.status.putProduct.success
  );
}
