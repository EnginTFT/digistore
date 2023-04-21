import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductEditComponent } from './product-edit.component';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { appState } from '../../../testing/app.state';
import { Router } from '@angular/router';
import { ProductListAction } from '../../../app/store/product-list/product-list.actions';

describe('ProductComponent', () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;
  let store: MockStore;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductEditComponent],
      imports: [StoreModule.forRoot({}), RouterTestingModule, HttpClientModule],
      providers: [provideMockStore({ initialState: appState })],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductEditComponent);
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should dispatch ProductListAction.getProduct(id) if getProduct() is called', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.productId = '1';
    const expectedAction = ProductListAction.getProduct({ id: '1' });
    component.getProduct();
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });
});
