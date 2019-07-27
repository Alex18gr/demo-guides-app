import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-guide3',
  templateUrl: './guide3.component.html',
  styleUrls: [
    './guide3.component.css'
  ]
})
export class Guide3Component implements OnInit {
  markdownData = '## markdown-it rulezz!';

  constructor() { }

  ngOnInit() {
  }

}
