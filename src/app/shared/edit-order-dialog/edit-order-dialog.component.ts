import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-edit-order-dialog',
  templateUrl: './edit-order-dialog.component.html',
  styleUrls: ['./edit-order-dialog.component.css']
})
export class EditOrderDialogComponent implements OnInit {
  listData: {
    name: string,
    order: number,
    type: string,
    resourceData: any
  }[];

  constructor(
    public dialogRef: MatDialogRef<EditOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {resourcesList: {
      name: string,
      order: number,
      type: string,
      resourceData: any
    }[]}
  ) { }

  ngOnInit() {
    this.listData = this.data.resourcesList.slice();
  }

  drop(event: CdkDragDrop<{ name: string; order: number; type: string; resourceData: any }[]>) {
    console.log('drop fired');
    moveItemInArray(this.listData, event.previousIndex, event.currentIndex);
  }
}
