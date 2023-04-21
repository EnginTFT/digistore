import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'digistore-ui-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
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
      id: new FormControl(product.id, Validators.required),
      product: new FormControl(product.product, Validators.required),
      manufacturer: new FormControl(product.manufacturer, Validators.required),
      description: new FormControl(product.description, Validators.required),
      category: new FormControl(product.category, Validators.required),
      price: new FormControl(product.price, [
        Validators.required,
        Validators.pattern(/\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})/g),
      ]),
      sale: new FormControl(product.sale),
      image: new FormControl(product.image, Validators.required),
    });
  }
  onSubmit() {
    this.submitClick.emit(this.productForm.value);
  }
  onBack() {
    this.backClick.emit();
  }
}
