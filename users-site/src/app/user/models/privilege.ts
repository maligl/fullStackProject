
export class Privilege{
  public id : number;
  public privilege : string;
  public description: string;
  public privileges : Privilege[];

  constructor(json : any){
    this.id = json['id'] || -1;
    this.privilege = json['privilege'] || '';
  }
}