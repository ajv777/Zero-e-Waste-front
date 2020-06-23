import { Component } from '@angular/core';
import { UsersService } from './servicios/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public usersService: UsersService) {}
}
