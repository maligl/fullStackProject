/**
 * User service
 * contains the array of user
 * get the user array and push new item to the array
 */

import {Injectable} from '@angular/core';
import {Subject, Observable, Subscription, BehaviorSubject} from "rxjs";
import { Response, RequestOptions } from "@angular/http";
import {User} from  "../models/user";
import {Privilege} from  "../models/privilege";
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService{
  
  public userSubject : Subject<string[]> = new Subject();
  private _users : User[] = [];

  constructor(private _http : HttpClient){

  }
  public addUser({ name, description }: { name: string; description: string; }) :Observable<void> {
    let u = new User({name:name, description:description});

    const serverObservable =  this._http.post(environment.apiUrl +`/users/add`, u)
    return serverObservable.pipe(map(user => {
      this._users.push(<User>user);
    }));
  }

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
  const serverObservable = this._http.get(environment.apiUrl +`/users`);
   return serverObservable.pipe(map((result : any[]) => {
        const users : User[] = [];
        for(let i=0; i<result.length; i++){
          users.push(new User(result[i]));
        }
        this._users = users;
        return users;
    }));
  }
}
