import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentVideoComponent } from './moment-video.component';

describe('MomentVideoComponent', () => {
  let component: MomentVideoComponent;
  let fixture: ComponentFixture<MomentVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MomentVideoComponent]
    });
    fixture = TestBed.createComponent(MomentVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
