import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileEditComponent } from '../profile-edit/edit.component';

@Component({
    selector: 'profile-steps',
    templateUrl: './steps.component.html',
    styleUrls: ['./steps.component.scss']
})
export class ProfileStepsComponent {

    @ViewChild(ProfileEditComponent) profileEdit: ProfileEditComponent;

}