import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarkdownViewerEditorComponent } from './markdown-viewer-editor.component';

describe('MarkdownViewerEditorComponent', () => {
  let component: MarkdownViewerEditorComponent;
  let fixture: ComponentFixture<MarkdownViewerEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownViewerEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownViewerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
