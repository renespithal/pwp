import { AuthService } from './common/services/auth.service';
import { Component } from '@angular/core';
import { IUser } from './resources/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: IUser;

  constructor(protected authService: AuthService) {
    this.user = this.authService.currentUser();
  }

  logout() {
    this.authService.logout();
  }

}
