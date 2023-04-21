import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductListService {
  url = 'http://localhost:3000/products/';

  constructor(private _httpClient: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this._httpClient.get(this.url) as any;
  }

  getProduct(id: string): Observable<Product> {
    return this._httpClient.get(this.url + id) as any;
  }

  putProduct(product: Product): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    return this._httpClient.put(this.url + product.id, product, {
      headers,
    });
  }
}
