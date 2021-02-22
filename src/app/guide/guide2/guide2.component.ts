import { Component, OnInit } from '@angular/core';
import {GuideData, GuideService} from '../../shared/guide.service';

@Component({
  selector: 'app-guide2',
  templateUrl: './guide2.component.html',
  styleUrls: ['./guide2.component.scss']
})
export class Guide2Component implements OnInit {
  guideData: GuideData;

  constructor(private guideService: GuideService) { }

  ngOnInit() {
    this.guideData = this.guideService.getGuideData(0);
  }

}
