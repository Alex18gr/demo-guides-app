import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatSelectModule,
  MatListModule
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    DragDropModule
  ],
  exports: [
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    DragDropModule
  ]
})
export class MaterialModule { }
