import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'product-list',
        pathMatch: 'full',
      },
      {
        path: 'product-list',
        component: ProductListComponent,
      },
      {
        path: 'product/edit/:id',
        component: ProductEditComponent,
      },
      {
        path: 'product/view/:id',
        component: ProductViewComponent,
      },
    ],
  },
];
