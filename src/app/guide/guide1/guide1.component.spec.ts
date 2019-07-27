import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Guide1Component } from './guide1.component';

describe('Guide1Component', () => {
  let component: Guide1Component;
  let fixture: ComponentFixture<Guide1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Guide1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Guide1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
