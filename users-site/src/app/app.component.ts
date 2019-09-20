import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h2>Full Stack Project</h2> \
              <a routerLink="/users" class="u-button">Show Users</a>\
              <router-outlet>',
            //  <user-list ></user-list> \
            //  <user-form></user-form>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'users-site';
  header = 'Users'
}
