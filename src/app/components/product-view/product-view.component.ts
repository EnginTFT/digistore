import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductListSelector } from '../../store/product-list/product-list.selectors';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListAction } from '../../store/product-list/product-list.actions';
@Component({
  selector: 'digistore-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  emptyCurrentProduct: Product = {
    id: '',
    product: '',
    manufacturer: '',
    description: '',
    category: [''],
    price: '',
    sale: false,
    image: '',
  };

  readonly currentProduct$: Observable<Product> = this._store$.select(
    ProductListSelector.currentProduct
  );

  productId = this._route.snapshot.paramMap.get('id');

  constructor(
    private readonly _store$: Store,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this._store$.dispatch(
      ProductListAction.getProduct({ id: this.productId as string })
    );
  }

  onBack() {
    this._router.navigate(['']);
  }
}
