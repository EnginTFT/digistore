import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductListAction } from '../../store/product-list/product-list.actions';
import { Observable } from 'rxjs';
import { ProductListTableRow } from '@digistore/ui';
import { ProductListSelector } from '../../store/product-list/product-list.selectors';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'digistore-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  readonly productTableData$: Observable<ProductListTableRow[]> =
    this._store$.select(ProductListSelector.productsTableData);

  readonly currentProduct$: Observable<Product> = this._store$.select(
    ProductListSelector.currentProduct
  );

  tableSelection: ProductListTableRow[] = [];

  constructor(
    private readonly _store$: Store,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this._store$.dispatch(ProductListAction.getProductList());
  }

  onEditClick(id: string) {
    this._router.navigate(['product/edit/', id]);
  }
  onViewClick(id: string) {
    this._router.navigate(['product/view/', id]);
  }
}
