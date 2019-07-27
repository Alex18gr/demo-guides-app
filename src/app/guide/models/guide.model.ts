export class GuideModel {
  resourceId: number;
  name: string;
  dateCreated: Date;
  guideDetails: {
    title: string,
    details: string,
    resourceList: any[]
  };
}
