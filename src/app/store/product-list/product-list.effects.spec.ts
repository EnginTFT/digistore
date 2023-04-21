import { mockProductListTableData } from '../../../testing/mockProductListTableData';
import { mockProduct } from '../../../testing/mockProduct';
import { mockProducts } from '../../../testing/mockProducts';
import { ProductListAction } from './product-list.actions';
import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { ProductListEffects } from './product-list.effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { appState } from '../../../testing/app.state';
import { ProductListService } from '../../../app/services/product-list.service';
import { Product } from '../../../app/models/product';

describe('ProductListEffects', () => {
  let testScheduler: TestScheduler;
  let productListEffects: ProductListEffects;
  let actions$: Observable<Action>;
  let _store$: Store;
  let productListService: ProductListService;
  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: appState,
        }),

        {
          provide: ProductListService,
        },
        HttpClient,
        HttpHandler,
      ],
    });
    productListEffects = TestBed.inject(ProductListEffects);
    productListService = TestBed.inject(ProductListService);
    _store$ = TestBed.inject(Store);
  });

  it(`It should return getProductListSuccess Action`, () => {
    type GetProductsSpy = () => Observable<Product[]>;
    const mock = jest.spyOn(
      productListService,
      'getProducts'
    ) as unknown as jest.MockedFunction<GetProductsSpy>;
    mock.mockImplementation(() => of(mockProducts));

    testScheduler.run((runHelpers) => {
      actions$ = runHelpers.cold('-a', {
        a: ProductListAction.getProductList(),
      });
      runHelpers
        .expectObservable(productListEffects.productListGet$)
        .toBe('-a', {
          a: ProductListAction.getProductListSuccess({
            products: mockProducts,
          }),
        });
    });
  });
  it(`It should return setProductList Action`, () => {
    testScheduler.run((runHelpers) => {
      actions$ = runHelpers.cold('-a', {
        a: ProductListAction.getProductListSuccess({ products: mockProducts }),
      });
      runHelpers
        .expectObservable(productListEffects.productListGetSuccess$)
        .toBe('-a', {
          a: ProductListAction.setProductList({
            productsTableData: mockProductListTableData,
          }),
        });
    });
  });
  it(`It should return getProductSuccess Action`, () => {
    type GetProductSpy = () => Observable<Product>;
    const mock = jest.spyOn(
      productListService,
      'getProduct'
    ) as unknown as jest.MockedFunction<GetProductSpy>;
    mock.mockImplementation(() => of(mockProduct));

    testScheduler.run((runHelpers) => {
      actions$ = runHelpers.cold('-a', {
        a: ProductListAction.getProduct({ id: mockProduct.id }),
      });
      runHelpers.expectObservable(productListEffects.productGet$).toBe('-a', {
        a: ProductListAction.getProductSuccess({
          product: mockProduct,
        }),
      });
    });
  });
  it(`It should return setCurrentProduct Action`, () => {
    testScheduler.run((runHelpers) => {
      actions$ = runHelpers.cold('-a', {
        a: ProductListAction.getProductSuccess({ product: mockProduct }),
      });
      runHelpers
        .expectObservable(productListEffects.productGetSuccess$)
        .toBe('-a', {
          a: ProductListAction.setCurrentProduct({
            product: mockProduct,
          }),
        });
    });
  });
  it(`It should return putProductSuccess Action`, () => {
    type PutProductSpy = () => Observable<Product>;
    const mock = jest.spyOn(
      productListService,
      'putProduct'
    ) as unknown as jest.MockedFunction<PutProductSpy>;
    mock.mockImplementation(() => of(mockProduct));

    testScheduler.run((runHelpers) => {
      actions$ = runHelpers.cold('-a', {
        a: ProductListAction.putProduct({ product: mockProduct }),
      });
      runHelpers.expectObservable(productListEffects.putProduct$).toBe('-a', {
        a: ProductListAction.putProductSuccess({
          product: mockProduct,
        }),
      });
    });
  });
});
