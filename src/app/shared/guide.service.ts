import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  private guides: GuideData[] = [
    {
      name: 'guide1',
      description: 'This is a guide about markdown language...',
      dateCreated: new Date(),
      resources: [
        {
          name: 'Introduction to markdown',
          order: 1,
          type: 'RES_MD',
          resourceData: {
            markdownData: '### This is a markdown introduction hehe'
          }
        },
        {
          name: 'More markdown information...',
          order: 4,
          type: 'RES_MD',
          resourceData: {
            markdownData: '## This is wayyy more markdown information...'
          }
        },
        {
          name: 'Markdown pdf',
          order: 2,
          type: 'RES_PDF',
          resourceData: {
            title: 'This is a markdown pdf document',
            description: 'This is a description....',
            pdfResourceUrl: './assets/chicken.pdf'
          }
        },
        {
          name: 'Markdown It repository',
          order: 3,
          type: 'RES_REPO',
          resourceData: {
            repo_owner: 'markdown-it',
            repo_name: 'markdown-it',
            description: 'This is the repository of the markdown-it project...'
          }
        },
        {
          name: 'A JS snippet',
          order: 5,
          type: 'RES_CODE',
          resourceData: {
            value: 'const i = aList.indexOf("123"); // This is a code snippet',
            language: 'javascript',
            title: 'A js snippet'
          }
        }
      ]
    }
  ];

  public getGuideData(guideNum: number) {
    let guide: GuideData;
    guide = {...this.guides[guideNum]};
    return guide;
  }

  constructor() { }
}

export interface GuideData {
  name: string;
  description: string;
  dateCreated: Date;
  resources: {
    name: string,
    order: number,
    type: string,
    resourceData: any
  }[];
}
