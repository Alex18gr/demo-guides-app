import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {ResourcesDialogComponent} from '../../shared/resources-dialog/resources-dialog.component';


@Component({
  selector: 'app-guide3',
  templateUrl: './guide3.component.html',
  styleUrls: [
    './guide3.component.scss'
  ]
})
export class Guide3Component implements OnInit {
  markdownData = '## markdown-it rulezz!';
  blobData: Blob;
  pdfData: ArrayBuffer;

  constructor(private httpClient: HttpClient,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getFile('http://localhost:8082/spring-security-oauth-resource/course/2/resource/14');
  }

  getFile(fileUrl: string) {
    // tslint:disable-next-line:max-line-length
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhbGV4Iiwic2NvcGUiOlsiZm9vIiwicmVhZCIsIndyaXRlIl0sImV4cCI6MTU2NDUwNDUwMiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9TVFVERU5UIl0sImp0aSI6IjQ0OTk4MmZkLTg3NWEtNGY0NC1hMTQwLTA3ZWVlOTE5NDU4NCIsImNsaWVudF9pZCI6InVpUGxhdGZvcm1DbGllbnQiLCJ1c2VybmFtZSI6ImFsZXgifQ.-DRTpA2IjQHwjNca_0cywb3fw8_TVPGVBYG70TNDCKg';
    const headers = new HttpHeaders().set('authorization', 'Bearer ' + token);
    this.httpClient.get(fileUrl, {
      headers,
      responseType: 'arraybuffer'
    }).subscribe((res: any) => {
      // console.log(res);
      // console.log(btoa(res));
      const binaryData = [];
      binaryData.push(res);
      this.pdfData = res;
      this.blobData = new Blob(binaryData);
    });
  }

  openAddResourceDialog() {
    const dialogRef = this.dialog.open(ResourcesDialogComponent, {
      width: '1000px',
      data: {}
    });
  }
}
