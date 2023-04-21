import { ActionReducerMap } from '@ngrx/store';
import {
  RouterReducerState,
  SerializedRouterStateSnapshot,
  routerReducer,
} from '@ngrx/router-store';

import { appStoreKey, AppState, appReducer } from './app.reducer';
export interface State {
  router: RouterReducerState<SerializedRouterStateSnapshot>;
  [appStoreKey]: AppState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  [appStoreKey]: appReducer,
};
