import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicGuideResourceComponent } from './dynamic-guide-resource.component';

describe('DynamicGuideResourceComponent', () => {
  let component: DynamicGuideResourceComponent;
  let fixture: ComponentFixture<DynamicGuideResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicGuideResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicGuideResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
