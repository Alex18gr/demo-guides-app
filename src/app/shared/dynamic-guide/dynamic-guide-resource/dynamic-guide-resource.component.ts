import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-guide-resource',
  templateUrl: './dynamic-guide-resource.component.html',
  styleUrls: ['./dynamic-guide-resource.component.css']
})
export class DynamicGuideResourceComponent implements OnInit {
  @Input() resource: any;

  constructor() { }

  ngOnInit() {
  }

}
