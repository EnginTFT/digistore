import * as fromReducer from './product-list.reducer';

import { mockProductListTableData } from '../../../testing/mockProductListTableData';
import { mockProduct } from '../../../testing/mockProduct';
import { mockProducts } from '../../../testing/mockProducts';
import { ProductListAction } from './product-list.actions';

describe('ProductListReducer', () => {
  it('should set getProductListSuccess ', () => {
    const { initialState } = fromReducer;
    const newState: fromReducer.ProductListState = {
      ...initialState,
      status: {
        productTableData: {
          loading: false,
          loaded: true,
          success: true,
        },
        currentProduct: {
          loading: false,
          loaded: false,
        },
        putProduct: {
          loading: false,
          loaded: false,
        },
      },
    };
    const action = ProductListAction.getProductListSuccess({
      products: mockProducts,
    });
    const state = fromReducer.productListReducer(initialState, action);
    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });
  it('should set setProductList to mockProductListTableData', () => {
    const { initialState } = fromReducer;
    const newState: fromReducer.ProductListState = {
      ...initialState,
      productsTableData: mockProductListTableData,
    };
    const action = ProductListAction.setProductList({
      productsTableData: mockProductListTableData,
    });
    const state = fromReducer.productListReducer(initialState, action);
    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });
  it('should set currentProduct to mockProduct', () => {
    const { initialState } = fromReducer;
    const newState: fromReducer.ProductListState = {
      ...initialState,
      currentProduct: mockProduct,
    };
    const action = ProductListAction.setCurrentProduct({
      product: mockProduct,
    });
    const state = fromReducer.productListReducer(initialState, action);
    expect(state).toEqual(newState);
    expect(state).not.toBe(newState);
  });
});
