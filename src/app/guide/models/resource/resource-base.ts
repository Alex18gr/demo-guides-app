export class ResourceBase {
  resourceId: number;
  name: string;
  dataCreated: Date;


  constructor(options: {
    resourceId: number,
    name: string,
    dataCreated: Date
  }) {
    this.resourceId = options.resourceId;
    this.name = options.name;
    this.dataCreated = options.dataCreated;
  }
}
