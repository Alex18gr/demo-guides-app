import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
// import * as Octokit from '@octokit/rest';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-github-viewer',
  templateUrl: './github-viewer.component.html',
  styleUrls: ['./github-viewer.component.css']
})
export class GithubViewerComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() description: string;
  @Input() repoOwner: string;
  @Input() repoName: string;
  // private octokit: Octokit;
  private data: any;
  private isLoaded = false;
  private repoUrl = 'https://api.github.com/';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.octokit = new Octokit();
    // Alex18gr/users_crud
    // this.octokit.repos.get({
    //     //   owner: 'atom',
    //     //   repo: 'atom'
    //     // }).then((data) => {
    //     //   console.log(data);
    //     //   this.data = data;
    //     //   this.isLoaded = true;
    //     // });
    if (this.repoName && this.repoOwner) {
      this.getRepositoryDetails(this.repoOwner, this.repoName);
    }
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
      window.open(this.data.html_url, '_blank');
    }
  }

  private getRepositoryDetails(owner: string, repoName: string) {
    this.httpClient.get(this.repoUrl + 'repos/' + owner + '/' + repoName + '')
      .subscribe(data => {
        console.log(data);
        this.data = data;
        this.isLoaded = true;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.repoOwner && changes.repoName &&
      (changes.repoOwner.previousValue !== changes.repoOwner.currentValue ||
      changes.repoName.previousValue !== changes.repoName.currentValue)) {
      this.isLoaded = false;
      this.getRepositoryDetails(this.repoOwner, this.repoName);
    }
  }
}
