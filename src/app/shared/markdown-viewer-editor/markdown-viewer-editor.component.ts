import {AfterViewChecked, Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as MarkdownIt from 'node_modules/markdown-it/dist/markdown-it.js';
import * as CodeMirror from 'node_modules/codemirror/lib/codemirror';
import * as hljs from 'node_modules/highlight.js/lib/highlight.js';

@Component({
  selector: 'app-markdown-viewer-editor',
  templateUrl: './markdown-viewer-editor.component.html',
  styleUrls: ['./markdown-viewer-editor.component.scss']
})
export class MarkdownViewerEditorComponent implements OnInit, AfterViewChecked {
  @ViewChild('markdownView') mdViewElement: ElementRef;
  @ViewChild('editor') editorElementRef: ElementRef;
  @Input() markdownData: string;
  private markdownView: MarkdownIt;
  private markdownHTML = '<h1>HELLO WORLD!!!</h1>';
  private mdEditor: MarkdownIt;
  editMode = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.initMarkdown();
    // this.initEditor();
  }

  initMarkdown() {
    this.markdownView = new MarkdownIt({
      highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return '<pre class="hljs"><code>' +
              hljs.highlight(lang, str, true).value +
              '</code></pre>';
          } catch (__) {}
        }
        return ''; // use external default escaping
      }
    });
    const mdData = this.markdownView.render(this.markdownData);
    // const mdElement = this.renderer.createElement(mdData);
    this.markdownHTML = mdData;
    // this.renderer.appendChild(this.mdViewElement, mdElement);
  }

  private initEditor() {
    // @ts-ignore
    require('node_modules/codemirror/mode/markdown/markdown.js');
    this.mdEditor = new CodeMirror.fromTextArea(this.editorElementRef.nativeElement,
      {
        lineNumbers: true,
        mode: {
          name: 'markdown',
          globalVars: true
        },
        readOnly: false,
        viewportMargin: Infinity
      }
    );
    this.mdEditor.setSize(null, 'auto');
  }

  onEditStart() {
    this.editMode = true;
  }

  ngAfterViewChecked(): void {
    if (this.editMode) {
      if (this.mdEditor == null) {
        this.initEditor();
        this.mdEditor.setValue(this.markdownData);
      }
    }
  }

  onSaveMarkdown() {
    this.markdownData = this.mdEditor.getValue();
    const mdData = this.markdownView.render(this.markdownData);
    // const mdElement = this.renderer.createElement(mdData);
    this.markdownHTML = mdData;
    this.editMode = false;
    this.mdEditor = null;
  }

  onCancelEditing() {
    this.editMode = false;
    this.mdEditor = null;
  }
}
