import { AuthService } from './../../../../common/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/resources/user';

@Component({
    selector: 'profile-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class ProfileEditComponent {

    /** */
    user: IUser;

    /** */
    profileForm: FormGroup;

    constructor(protected authService: AuthService,
        protected fb: FormBuilder) {

        this.user = this.authService.currentUser();
        this.resetForm();

    }

    /**
     * 
     */
    resetForm() {

        this.profileForm = this.fb.group({
            first_name: [this.user.first_name, Validators.required],
            name: [this.user.name, Validators.required],
            gender: [this.user.gender, Validators.required]
        });

    }

}