import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';

import {
  ProductListState,
  productListReducer,
  productListStoreKey,
} from './product-list/product-list.reducer';

export const appStoreKey = 'digistore-app';

export interface AppState {
  [productListStoreKey]: ProductListState;
}
export const reducers: ActionReducerMap<AppState> = {
  [productListStoreKey]: productListReducer,
};

export const appReducer: ActionReducer<AppState> = combineReducers(reducers);
