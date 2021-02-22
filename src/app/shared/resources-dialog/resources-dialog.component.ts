import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatSelectChange} from '@angular/material';

@Component({
  selector: 'app-resources-dialog',
  templateUrl: './resources-dialog.component.html',
  styleUrls: ['./resources-dialog.component.scss']
})
export class ResourcesDialogComponent implements OnInit {
  resourceTypes: {value: string, viewValue: string}[] = [
    {value: 'RES_CODE', viewValue: 'Code Snippet'},
    {value: 'RES_MD', viewValue: 'Markdown Document'},
    {value: 'RES_REPO', viewValue: 'Repository'},
    {value: 'RES_PDF', viewValue: 'PDF Document'}
  ];
  selection: string;

  constructor(
    public dialogRef: MatDialogRef<ResourcesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onResourceTypeSelectionChanged(event: MatSelectChange) {
    console.log(event);
    this.selection = event.value;
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
