import { mockProductListTableData } from '../../../testing/mockProductListTableData';
import { mockProduct } from '../../../testing/mockProduct';
import { mockProducts } from '../../../testing/mockProducts';
import { ProductListAction } from './product-list.actions';

describe('ProductListAction', () => {
  it('getProductList Action should fire correctly', () => {
    const action = ProductListAction.getProductList();
    expect({ ...action }).toEqual({
      type: ProductListAction.types.GET_PRODUCT_LIST,
    });
  });
  it('getProductListSuccess Action should fire correctly', () => {
    const action = ProductListAction.getProductListSuccess({
      products: mockProducts,
    });
    expect({ ...action }).toEqual({
      type: ProductListAction.types.GET_PRODUCT_LIST_SUCCESS,
      products: mockProducts,
    });
  });
  it('getProduct Action should fire correctly', () => {
    const action = ProductListAction.getProduct({
      id: mockProduct.id,
    });
    expect({ ...action }).toEqual({
      type: ProductListAction.types.GET_PRODUCT,
      id: mockProduct.id,
    });
  });
  it('getProductSuccess Action should fire correctly', () => {
    const action = ProductListAction.getProductSuccess({
      product: mockProduct,
    });
    expect({ ...action }).toEqual({
      type: ProductListAction.types.GET_PRODUCT_SUCCESS,
      product: mockProduct,
    });
  });
  it('setProductList Action should fire correctly', () => {
    const action = ProductListAction.setProductList({
      productsTableData: mockProductListTableData,
    });
    expect({ ...action }).toEqual({
      type: ProductListAction.types.SET_PRODUCT_LIST_TABLE_DATA,
      productsTableData: mockProductListTableData,
    });
  });
  it('setCurrentProduct Action should fire correctly', () => {
    const action = ProductListAction.setCurrentProduct({
      product: mockProduct,
    });
    expect({ ...action }).toEqual({
      type: ProductListAction.types.SET_CURRENT_PRODUCT,
      product: mockProduct,
    });
  });
  it('putProduct Action should fire correctly', () => {
    const action = ProductListAction.putProduct({
      product: mockProduct,
    });
    expect({ ...action }).toEqual({
      type: ProductListAction.types.PUT_PRODUCT,
      product: mockProduct,
    });
  });
  it('putProductSuccess Action should fire correctly', () => {
    const action = ProductListAction.putProductSuccess({
      product: mockProduct,
    });
    expect({ ...action }).toEqual({
      type: ProductListAction.types.PUT_PRODUCT_SUCCEESS,
      product: mockProduct,
    });
  });
});
