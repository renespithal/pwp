import { AuthResource } from './../../resources/auth';
import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { IUser } from 'src/app/resources/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class StartupService {

    constructor(protected authService: AuthService,
        protected authResource: AuthResource) {}


    load() {

        return new Promise((resolve, reject) => {
            this.loadUser().then(u => {

                this.authService.setUser(u);

                resolve(true);

            })
        })

    }

    protected loadUser() {
        return this.authResource.currentUser();
    }

}