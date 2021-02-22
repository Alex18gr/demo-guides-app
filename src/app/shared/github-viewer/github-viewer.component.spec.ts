import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GithubViewerComponent } from './github-viewer.component';

describe('GithubViewerComponent', () => {
  let component: GithubViewerComponent;
  let fixture: ComponentFixture<GithubViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
