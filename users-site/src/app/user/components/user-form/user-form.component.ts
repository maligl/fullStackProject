/**
 * contains the form
 * adds new user 
 */

import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  public name : string = '';
  public description : string = '';

  constructor(private _userService : UserService, private _router: Router){

  }

  public addUser(){
    this._userService.addUser({ name: this.name, description: this.description })
    .subscribe(res=>{
      this._router.navigate(['/users']);
    })
  }
}
