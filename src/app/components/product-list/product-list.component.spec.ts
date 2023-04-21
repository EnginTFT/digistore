import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { appState } from '../../../testing/app.state';
import { ProductListAction } from '../../store/product-list/product-list.actions';
import { Router } from '@angular/router';
describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: MockStore;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [StoreModule.forRoot({})],
      providers: [provideMockStore({ initialState: appState })],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should dispatch ProductListAction.getProductList() if ngOnInit is called', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    const expectedAction = ProductListAction.getProductList();
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });
  it('should navigate to edit route with id when edit is clicked', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    component.onEditClick('1');
    expect(navigateSpy).toHaveBeenCalledWith(['product/edit/', '1']);
  });
  it('should navigate to view route with id when view is clicked', () => {
    const navigateSpy = jest.spyOn(router, 'navigate');
    component.onViewClick('1');
    expect(navigateSpy).toHaveBeenCalledWith(['product/view/', '1']);
  });
});
