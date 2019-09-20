import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { UserFormComponent } from './user/components/user-form/user-form.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'create-user', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
