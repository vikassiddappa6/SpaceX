import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mission2Component } from './mission2.component';

describe('Mission2Component', () => {
  let component: Mission2Component;
  let fixture: ComponentFixture<Mission2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mission2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mission2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
