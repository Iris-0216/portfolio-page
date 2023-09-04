import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentIntroComponent } from './moment-intro.component';

describe('MomentIntroComponent', () => {
  let component: MomentIntroComponent;
  let fixture: ComponentFixture<MomentIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MomentIntroComponent]
    });
    fixture = TestBed.createComponent(MomentIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
