import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'profile-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class ProfileEditComponent {

    /** */
    profileForm: FormGroup;

    constructor(protected fb: FormBuilder) {

        this.resetForm();

    }

    /**
     * 
     */
    resetForm() {

        this.profileForm = this.fb.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            gender: [null, Validators.required]
        });

    }

}