import { ProductListService } from './product-list.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockProducts } from '../../testing/mockProducts';
import { mockProduct } from '../../testing/mockProduct';

describe('CreateEprescriptionEffects', () => {
  let productListService: ProductListService;

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductListService],
    });

    productListService = TestBed.inject(ProductListService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  it(`getProducts should return products`, (done) => {
    productListService.getProducts().subscribe((products) => {
      expect(products.length).toBe(2);
      expect(products).toEqual(mockProducts);
      done();
    });

    const req = httpMock.expectOne(`http://localhost:3000/products/`);
    req.flush(mockProducts);
  });
  it(`getProducts should return products`, (done) => {
    productListService.getProduct('1').subscribe((product) => {
      expect(product).toEqual(mockProduct);
      done();
    });

    const req = httpMock.expectOne(`http://localhost:3000/products/1`);
    req.flush(mockProduct);
  });
  it(`putProduct should put product`, (done) => {
    productListService.putProduct(mockProduct).subscribe((product) => {
      expect(product).toEqual(mockProduct);
      done();
    });

    const req = httpMock.expectOne(`http://localhost:3000/products/1`);
    req.flush(mockProduct);
  });
  afterEach(() => {
    httpMock.verify();
  });
});
