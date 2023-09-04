import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePjCardComponent } from './mobile-pj-card.component';

describe('MobilePjCardComponent', () => {
  let component: MobilePjCardComponent;
  let fixture: ComponentFixture<MobilePjCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilePjCardComponent]
    });
    fixture = TestBed.createComponent(MobilePjCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
