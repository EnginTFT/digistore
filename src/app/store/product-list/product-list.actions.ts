import { createAction, props, union } from '@ngrx/store';
import { ProductListTableRow } from '@digistore/ui';
import { Product } from '../../models/product';

enum ProductListActionTypes {
  GET_PRODUCT_LIST = '[Product List] GET_PRODUCT_LIST',
  GET_PRODUCT_LIST_SUCCESS = '[Product List] GET_PRODUCT_LIST_SUCCESS',
  GET_PRODUCT = '[Product List] GET_PRODUCT',
  GET_PRODUCT_SUCCESS = '[Product List] GET_PRODUCT_SUCCESS',
  SET_PRODUCT_LIST_TABLE_DATA = '[Product List] SET_PRODUCT_LIST_TABLE_DATA',
  SET_CURRENT_PRODUCT = '[Product List] SET_CURRENT_PRODUCT',
  SET_DETAILS_DIALOG_STATUS = '[Product List] SET_DETAILS_DIALOG_STATUS',
  PUT_PRODUCT = '[Product List] PUT_PRODUCT',
  PUT_PRODUCT_SUCCEESS = '[Product List] PUT_PRODUCT_SUCCESS',
}

export class ProductListAction {
  static readonly types = ProductListActionTypes;

  static readonly getProductList = createAction(
    ProductListAction.types.GET_PRODUCT_LIST
  );
  static readonly getProductListSuccess = createAction(
    ProductListAction.types.GET_PRODUCT_LIST_SUCCESS,
    props<{ products: Product[] }>()
  );

  static readonly getProduct = createAction(
    ProductListAction.types.GET_PRODUCT,
    props<{ id: string }>()
  );
  static readonly getProductSuccess = createAction(
    ProductListAction.types.GET_PRODUCT_SUCCESS,
    props<{ product: Product }>()
  );

  static readonly setProductList = createAction(
    ProductListAction.types.SET_PRODUCT_LIST_TABLE_DATA,
    props<{ productsTableData: ProductListTableRow[] }>()
  );
  static readonly setCurrentProduct = createAction(
    ProductListAction.types.SET_CURRENT_PRODUCT,
    props<{ product: Product }>()
  );
  static readonly putProduct = createAction(
    ProductListAction.types.PUT_PRODUCT,
    props<{ product: Product }>()
  );
  static readonly putProductSuccess = createAction(
    ProductListAction.types.PUT_PRODUCT_SUCCEESS,
    props<{ product: Product }>()
  );
}

const ProductListActions = union({
  getProductList: ProductListAction.getProductList,
  getProductListSuccess: ProductListAction.getProductListSuccess,
  getProduct: ProductListAction.getProduct,
  getProductSuccess: ProductListAction.getProductSuccess,
  setProductList: ProductListAction.setProductList,
  setCurrentProduct: ProductListAction.setCurrentProduct,
  putProduct: ProductListAction.putProduct,
  putProductSuccess: ProductListAction.putProductSuccess,
});

export type ProductListActions = typeof ProductListActions;
