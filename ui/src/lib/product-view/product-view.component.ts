import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
@Component({
  selector: 'digistore-ui-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent {
  @Input()
  currentProduct$!: Observable<Product>;

  @Output()
  backClick = new EventEmitter<void>();

  @Output()
  submitClick = new EventEmitter<Product>();

  productForm!: FormGroup;

  ngOnInit(): void {
    this.currentProduct$.subscribe((product) => {
      this.productForm = this.buildForm(product);
    });
  }

  buildForm(product: Product): FormGroup {
    return new FormGroup({
      id: new FormControl({ value: product.id, disabled: true }),
      product: new FormControl({ value: product.product, disabled: true }),
      manufacturer: new FormControl({
        value: product.manufacturer,
        disabled: true,
      }),
      description: new FormControl({
        value: product.description,
        disabled: true,
      }),
      category: new FormControl({ value: product.category, disabled: true }),
      price: new FormControl({ value: product.price, disabled: true }),
      sale: new FormControl({ value: product.sale, disabled: true }),
      image: new FormControl(product.image),
    });
  }

  onBack() {
    this.backClick.emit();
  }
}
