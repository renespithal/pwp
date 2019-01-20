import { AuthService } from 'src/app/common/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'routing',
    template: ``
})
export class RoutingComponent {

    constructor(protected router: Router,
        protected authService: AuthService) {

            if(this.authService.currentUser().profile_complete) {
                this.router.navigate(['match']);
            } else {
                this.router.navigate(['profile']);
            }

    }

}