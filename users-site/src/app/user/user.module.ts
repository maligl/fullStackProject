/**
 * User module
 */

import {NgModule} from '@angular/core';
import {UserService} from './services/user.service';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  providers: [UserService],
  declarations: [UserListComponent, UserFormComponent],
  exports: [UserListComponent, UserFormComponent],
  imports: [FormsModule, CommonModule,
    AgGridModule.withComponents([])
  ]
})
export class UserModule{

}