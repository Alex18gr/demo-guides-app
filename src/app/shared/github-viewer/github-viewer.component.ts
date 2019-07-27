import {Component, Input, OnInit} from '@angular/core';
import * as Octokit from '@octokit/rest';

@Component({
  selector: 'app-github-viewer',
  templateUrl: './github-viewer.component.html',
  styleUrls: ['./github-viewer.component.css']
})
export class GithubViewerComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  private octokit: Octokit;
  private data: any;
  private isLoaded = false;

  constructor() { }

  ngOnInit() {
    this.octokit = new Octokit();
    // Alex18gr/users_crud
    this.octokit.repos.get({
      owner: 'atom',
      repo: 'atom'
    }).then((data) => {
      console.log(data);
      this.data = data;
      this.isLoaded = true;
    });
  }

  private getDateFromString(date: string) {
    return new Date(date);
  }

  private kFormatter(num) {
    // @ts-ignore
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num);
  }

  navigateToRepository() {
    if (this.isLoaded) {
      // window.location.href = this.data.data.html_url;
      window.open(this.data.data.html_url, '_blank');
    }
  }
}
