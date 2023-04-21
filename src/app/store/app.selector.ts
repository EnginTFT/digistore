import { createFeatureSelector } from '@ngrx/store';
import { AppState, appStoreKey } from './app.reducer';

export class AppSelector {
  static readonly state = createFeatureSelector<AppState>(appStoreKey);
}
