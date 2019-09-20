
export class Privilege {
  public id: number;
  public privilege: string;
  public description: string;
  public privileges: Privilege[];

  constructor(privilegeObj: any) {
    this.id = privilegeObj.id || -1;
    this.privilege = privilegeObj.privilege || '';
  }
}