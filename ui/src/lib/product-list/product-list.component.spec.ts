import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: UiProductListComponent;
  let fixture: ComponentFixture<UiProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiProductListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
