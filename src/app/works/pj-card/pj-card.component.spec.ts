import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjCardComponent } from './pj-card.component';

describe('PjCardComponent', () => {
  let component: PjCardComponent;
  let fixture: ComponentFixture<PjCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PjCardComponent]
    });
    fixture = TestBed.createComponent(PjCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
