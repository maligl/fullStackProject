/**
 * User service
 * contains the array of user
 * get the user array and push new item to the array
 */

import {Injectable} from '@angular/core';
import {Subject, Observable, Subscription} from "rxjs";
import {Http, Response} from "@angular/http";
import {User} from  "../models/user";
import {Privilege} from  "../models/privilege";
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService{
  public userSubject : Subject<string[]> = new Subject();
  private _users : User[] = [];
  // private _users : any[] = [{"id":1,"name":"Admin","description":"SysAdmin","Privileges":[{"id":7,"privilege":"ViewConfigureSystem","users_privelege":{"UserId":1,"PrivilegeId":7}}]},{"id":2,"name":"Viewer1","description":"Read only","Privileges":[{"id":2,"privilege":"ViewUsers","users_privelege":{"UserId":2,"PrivilegeId":2}},{"id":4,"privilege":"ViewRoles","users_privelege":{"UserId":2,"PrivilegeId":4}},{"id":1,"privilege":"ViewData","users_privelege":{"UserId":2,"PrivilegeId":1}}]},{"id":3,"name":"Viewer2","description":"Read only","Privileges":[{"id":2,"privilege":"ViewUsers","users_privelege":{"UserId":3,"PrivilegeId":2}},{"id":4,"privilege":"ViewRoles","users_privelege":{"UserId":3,"PrivilegeId":4}},{"id":1,"privilege":"ViewData","users_privelege":{"UserId":3,"PrivilegeId":1}}]},{"id":4,"name":"Viewer3","description":"","Privileges":[{"id":2,"privilege":"ViewUsers","users_privelege":{"UserId":4,"PrivilegeId":2}},{"id":4,"privilege":"ViewRoles","users_privelege":{"UserId":4,"PrivilegeId":4}},{"id":1,"privilege":"ViewData","users_privelege":{"UserId":4,"PrivilegeId":1}}]},{"id":5,"name":"RolesHandler","description":"Limited to roles","Privileges":[{"id":4,"privilege":"ViewRoles","users_privelege":{"UserId":5,"PrivilegeId":4}},{"id":5,"privilege":"ManageRoles","users_privelege":{"UserId":5,"PrivilegeId":5}}]},{"id":6,"name":"DataObserver","description":"","Privileges":[{"id":1,"privilege":"ViewData","users_privelege":{"UserId":6,"PrivilegeId":1}}]},{"id":7,"name":"SuperUser","description":"","Privileges":[{"id":2,"privilege":"ViewUsers","users_privelege":{"UserId":7,"PrivilegeId":2}},{"id":3,"privilege":"ManageUsers","users_privelege":{"UserId":7,"PrivilegeId":3}}]}];
  constructor(private _http : Http){

  }
  // public addUser(user : string) : void {
  //   this._users.push(user);
  //   this.userSubject.next(this._users);
  // }

  // public getUser() : string[] {
  //   return this._users;
  // }

  // public deleteUser(index : number) {
  //   const newUser : string[] = [];
  //   for(let i=0; i<this._users.length; i++) {
  //     if(i === index)continue;
  //     newUser.push(this._users[i]);
  //   }
  //   this._users = newUser;
  //   this.userSubject.next(this._users);
  // }

  public getUsers() : Observable<User[]>{
    // return this._users;

  const serverObservable = this._http.get(environment.apiUrl +`/users`);
   return serverObservable.pipe(map((res : Response) => {
        const users : User[] = [];
        const json = res.json();
        for(let i=0; i<json.length; i++){
          users.push(new User(json[i]));
        }
        this._users = users;
        return users;
    }));
    
  }
  // public ngOnInit() {
  //   this.fetchUsers().sub
  //     this._users = this.client.fetchUsers()
  // }
}
