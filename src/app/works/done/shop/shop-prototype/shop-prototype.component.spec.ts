import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPrototypeComponent } from './shop-prototype.component';

describe('ShopPrototypeComponent', () => {
  let component: ShopPrototypeComponent;
  let fixture: ComponentFixture<ShopPrototypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopPrototypeComponent]
    });
    fixture = TestBed.createComponent(ShopPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
