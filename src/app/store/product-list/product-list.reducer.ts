import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import { ProductListActions, ProductListAction } from './product-list.actions';
import { Product } from '../../models/product';
import { ProductListTableRow } from '@digistore/ui';

export const productListStoreKey = 'product-list';

export interface CallStatus {
  loading: boolean;
  loaded: boolean;
  success?: boolean;
  error?: boolean;
}
export interface ProductListState {
  productsTableData: ProductListTableRow[];
  currentProduct: Product;
  status: {
    productTableData: CallStatus;
    currentProduct: CallStatus;
    putProduct: CallStatus;
  };
}

export const initialState: ProductListState = {
  productsTableData: [],
  currentProduct: {
    id: '',
    product: '',
    manufacturer: '',
    description: '',
    category: [''],
    price: '',
    sale: false,
    image: '',
  },
  status: {
    productTableData: { loading: false, loaded: false },
    currentProduct: { loading: false, loaded: false },
    putProduct: { loading: false, loaded: false },
  },
};

export const productListReducer = createReducer(
  initialState,
  on(ProductListAction.getProductList, (state) => {
    const newState: ProductListState = cloneDeep(state);
    newState.status.productTableData.loading = true;
    newState.status.productTableData.loaded = false;
    return newState;
  }),
  on(ProductListAction.getProductListSuccess, (state) => {
    const newState: ProductListState = cloneDeep(state);
    newState.status.productTableData.loading = false;
    newState.status.productTableData.loaded = true;
    newState.status.productTableData.success = true;
    return newState;
  }),
  on(ProductListAction.getProduct, (state) => {
    const newState: ProductListState = cloneDeep(state);
    newState.status.currentProduct.loading = true;
    newState.status.currentProduct.loaded = false;
    return newState;
  }),
  on(ProductListAction.getProductSuccess, (state) => {
    const newState: ProductListState = cloneDeep(state);
    newState.status.currentProduct.loading = false;
    newState.status.currentProduct.loaded = true;
    newState.status.currentProduct.success = true;
    return newState;
  }),
  on(ProductListAction.setProductList, (state, action) => {
    const newState: ProductListState = cloneDeep(state);
    newState.productsTableData = action.productsTableData;
    return newState;
  }),
  on(ProductListAction.setCurrentProduct, (state, action) => {
    const newState: ProductListState = cloneDeep(state);
    newState.currentProduct = action.product;
    return newState;
  }),
  on(ProductListAction.putProductSuccess, (state) => {
    const newState: ProductListState = cloneDeep(state);
    newState.status.putProduct.loading = false;
    newState.status.putProduct.loaded = true;
    newState.status.putProduct.success = true;
    return newState;
  })
);
