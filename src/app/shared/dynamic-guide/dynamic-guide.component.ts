import {Component, Input, OnInit} from '@angular/core';
import {GuideData} from '../guide.service';
import {ResourcesDialogComponent} from '../resources-dialog/resources-dialog.component';
import {MatDialog} from '@angular/material';
import {EditOrderDialogComponent} from '../edit-order-dialog/edit-order-dialog.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import * as _ from 'lodash';

@Component({
  selector: 'app-dynamic-guide',
  templateUrl: './dynamic-guide.component.html',
  styleUrls: ['./dynamic-guide.component.css']
})
export class DynamicGuideComponent implements OnInit {
  @Input() guideData: GuideData;
  private editingOrder = false;
  editGuideOrderData: any[];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    if (this.guideData) {
      this.orderResources();
    }
  }

  onEditOrder() {
    // const dialogRef = this.dialog.open(EditOrderDialogComponent, {
    //   width: '1000px',
    //   data: {
    //     resourcesList: this.guideData.resources
    //   }
    // });
    // this.previousGuideData = Object.assign({}, this.guideData);
    this.editGuideOrderData = _.cloneDeep(this.guideData.resources);
    this.editingOrder = true;
  }

  copyOrder(newOrderedList: any[]) {
    for (const item of newOrderedList) {
      for (const resource of this.guideData.resources) {
        if (resource.name === item.name) {
          resource.order = item.order;
        }
      }
    }
  }

  calculateOrder(resourcesList: any[]) {
    for (const item of resourcesList) {
      item.order = resourcesList.indexOf(item) + 1;
    }
  }

  onSaveOrder() {
    this.copyOrder(this.editGuideOrderData);
    this.orderResources();
    this.editingOrder = false;
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.editGuideOrderData, event.previousIndex, event.currentIndex);
    this.calculateOrder(this.editGuideOrderData);
  }

  onCancelEditOrder() {
    // this.guideData.resources = _.cloneDeep(this.editGuideOrderData);
    // JSON.parse(JSON.stringify(this.previousGuideData));
    this.editGuideOrderData = null;
    this.editingOrder = false;
  }

  private orderResources() {
    this.guideData.resources = _.orderBy(this.guideData.resources, ['order'], ['asc']);
  }
}
