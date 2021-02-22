import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicGuideResourceComponent } from './dynamic-guide-resource.component';

describe('DynamicGuideResourceComponent', () => {
  let component: DynamicGuideResourceComponent;
  let fixture: ComponentFixture<DynamicGuideResourceComponent>;

  beforeEach(waitForAsync(() => {
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
