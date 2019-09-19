import { Privilege } from './privilege';

/**
 * model for user
 */

export class User{
  public id : number;
  public name : string;
  public description: string;
  public privileges : Privilege[];

  constructor(json : any){
    this.id = json['id'] || -1;
    this.name = json['name'] || '';
    this.description = json['description'] || '';
    var privileges_json = json['Privileges'] || '';
    this.privileges = [];
    for(let i=0; i<privileges_json.length; i++){
     this.privileges.push(new Privilege(privileges_json[i]));
    };
  }
}
