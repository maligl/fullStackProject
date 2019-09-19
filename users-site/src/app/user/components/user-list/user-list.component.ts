/**
 * display the list of users
 */

import { Component } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls:['/user.component.scss']
})
export class UserListComponent {
  public users: Observable<User[]>;
  public columnDefs = [];
  constructor(private _userService: UserService) {
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
  }
  
  public onGridReady(params:any){
    params.api.sizeColumnsToFit() ;
  }
}
