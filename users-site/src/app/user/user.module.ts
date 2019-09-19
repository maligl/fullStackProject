/**
 * User module
 */

import {NgModule} from '@angular/core';
// import * as services from '...';
import {UserService} from './services/user.service';
// import {GreetingFormComponent} from './components/greeting-form/greeting-form.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { AgGridModule } from 'ag-grid-angular';

// import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
//   MatSortModule, MatTableModule } from "@angular/material";

@NgModule({
  providers: [UserService],
  declarations: [UserListComponent],
  exports: [UserListComponent],
  imports: [FormsModule, CommonModule,
    AgGridModule.withComponents([])
    // MatInputModule, MatPaginatorModule, 
    // MatProgressSpinnerModule, 
    // MatSortModule, MatTableModule
  ]
})
export class UserModule{

}