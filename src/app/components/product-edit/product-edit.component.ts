import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter, take } from 'rxjs';
import { ProductListSelector } from '../../store/product-list/product-list.selectors';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListAction } from '../../store/product-list/product-list.actions';
@Component({
  selector: 'digistore-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
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

  readonly putProductSuccess$: Observable<boolean | undefined> =
    this._store$.select(ProductListSelector.putProductSuccess);

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

  onSubmit(product: Product) {
    this._store$.dispatch(ProductListAction.putProduct({ product }));
    this.putProductSuccess$
      .pipe(
        filter((success) => success === true),
        take(1)
      )
      .subscribe(() => {
        this._router.navigate(['']);
      });
  }
  onBack() {
    this._router.navigate(['']);
  }
}
