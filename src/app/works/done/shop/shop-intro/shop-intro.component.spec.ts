import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopIntroComponent } from './shop-intro.component';

describe('ShopIntroComponent', () => {
  let component: ShopIntroComponent;
  let fixture: ComponentFixture<ShopIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopIntroComponent]
    });
    fixture = TestBed.createComponent(ShopIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
