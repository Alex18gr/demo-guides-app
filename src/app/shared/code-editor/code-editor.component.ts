import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as CodeMirror from 'node_modules/codemirror/lib/codemirror';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {
  @ViewChild('editor', {static: false}) editorElementRef: ElementRef;
  @ViewChild('editForm', {static: false}) editForm: NgForm;
  @Input() isDisabled = false;
  @Input() defaultValue: string = null;
  @Input() description = '';
  @Input() language = '';
  @Input() title = '';
  disabledMode = false;
  editor: any;
  isEditing = false;
  private modeLanguage = '';
  private editorCurrentValue: string;

  languageOptions = [
    {value: '', key: ''},
    {value: 'text/x-java', key: 'Java'},
    {value: 'javascript', key: 'Javascript'},
    {value: 'clike', key: 'C/C++'},
    {value: 'python', key: 'Python'},
    {value: 'php', key: 'PHP'},
    {value: 'htmlmixed', key: 'HTML-mixed'},
    {value: 'markdown', key: 'Markdown'}
  ];

  constructor() { }

  startEditMode() {
    this.editorCurrentValue = this.editor.getValue();
    this.isEditing = true;
    if (this.disabledMode) {
      this.isDisabled = false;
      this.editor.setOption('readOnly', this.isDisabled);
    }
  }

  createEditor() {
    this.modeLanguage = this.language;
    this.editor = new CodeMirror.fromTextArea(this.editorElementRef.nativeElement,
      {
        lineNumbers: true,
        mode: {
          name: this.modeLanguage,
          globalVars: true
        },
        readOnly: this.isDisabled,
        viewportMargin: Infinity
      }
    );
    this.editor.setSize(null, 'auto');
  }

  ngOnInit() {
    this.loadLanguages();
    this.createEditor();
    if (this.defaultValue != null) {
      this.editor.setValue(this.defaultValue);
    }
    if (this.isDisabled) {
      this.disabledMode = true;
    }
    // if (this.defaultValue != null) {
    //   this.editor.setValue('ngOnInit() {\n' +
    //     '    // tslint:disable-next-line:max-line-length\n' +
    //     '    this.editor = new CodeMirror.fromTextArea(this.editorElementRef.nativeElement,\n' +
    //     '        {\n' +
    //     '          lineNumbers: true,\n' +
    //     '          mode: {\n' +
    //     '            name: \'javascript\',\n' +
    //     '            globalVars: true\n' +
    //     '          },\n' +
    //     '          value: \'var name = "hello";\'\n' +
    //     '        }\n' +
    //     '      );\n' +
    //     '  }');
    // }

  }

  loadLanguages() {
    // @ts-ignore
    require('node_modules/codemirror/mode/javascript/javascript.js');
    // @ts-ignore
    require('node_modules/codemirror/mode/clike/clike.js');
    // @ts-ignore
    require('node_modules/codemirror/mode/python/python.js');
    // @ts-ignore
    require('node_modules/codemirror/mode/php/php.js');
    // @ts-ignore
    require('node_modules/codemirror/mode/htmlmixed/htmlmixed.js');
    // @ts-ignore
    require('node_modules/codemirror/mode/markdown/markdown.js');
  }

  onSaveCodeDocument() {
    // maybe here check authorization
    const documentValue = this.editor.getValue();
    console.log(documentValue);
  }

  onCancelEditing() {
    this.editForm.resetForm();
    this.isEditing = false;
    this.editor.setValue(this.editorCurrentValue);
    if (this.disabledMode) {
      this.isDisabled = true;
      this.editor.setOption('readOnly', this.isDisabled);
    }
  }

  onEditFormSubmit() {
    console.log(this.editForm.value);
    this.title = this.editForm.value.title;
    this.modeLanguage = this.editForm.value.language;
    this.editor.setOption('mode', this.modeLanguage);
    this.saveChanges();
    this.isEditing = false;
    if (this.disabledMode) {
      this.isDisabled = true;
      this.editor.setOption('readOnly', this.isDisabled);
    }
  }

  private saveChanges() {
    // here we save the changes to the sever
  }
}
