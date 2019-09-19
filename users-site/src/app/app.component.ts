import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h2>Full Stack Project</h2> \
             <user-list ></user-list> ',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'users-site';
  header = 'Users'
}
