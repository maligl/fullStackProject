import { Privilege } from './privilege';

/**
 * model for user
 */

export class User{
  public id : number;
  public name : string;
  public description: string;
  public privileges : Privilege[];

  constructor(userObj : any){
    this.id = userObj.id || -1;
    this.name = userObj.name || '';
    this.description = userObj.description || '';
    var privileges_json = userObj.Privileges || [];
    this.privileges = [];
    for(let i=0; i<privileges_json.length; i++){
     this.privileges.push(new Privilege(privileges_json[i]));
    };
  }
}
