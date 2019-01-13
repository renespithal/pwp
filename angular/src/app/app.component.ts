import { AuthService } from './common/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(protected authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

}
