/**
 * display the list of users
 */

import { Component } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls:['/user.component.scss']
})
export class UserListComponent {
  public users: Observable<User[]>;
  public columnDefs = [];
  private initialized = false;
  constructor(private _userService: UserService, private _router:Router) {
    this.columnDefs = [
      { headerName: 'User Name', field: 'name' },
      {
        headerName: 'Privileges', valueGetter: function (params) {
          return params.data.privileges.map(function (elem) {
            return elem.privilege;
          }).join(", ");;
        },
      },
      { headerName: 'Description', field: 'description' }
    ];
  }
  
  ngOnInit() {
    this.users = this._userService.getUsers();
    this.initialized = true;
  }
  
  public onGridReady(params:any, o:any){
    params.api.sizeColumnsToFit() ;
  }

}
