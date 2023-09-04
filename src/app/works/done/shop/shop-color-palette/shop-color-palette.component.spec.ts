import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopColorPaletteComponent } from './shop-color-palette.component';

describe('ShopColorPaletteComponent', () => {
  let component: ShopColorPaletteComponent;
  let fixture: ComponentFixture<ShopColorPaletteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopColorPaletteComponent]
    });
    fixture = TestBed.createComponent(ShopColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
