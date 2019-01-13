import { MatSnackBar } from '@angular/material';
import { AuthService } from './../../../../common/services/auth.service';
import { UserResource } from './../../../../resources/user';
import { SpinnerService } from './../../../../common/spinner/spinner.service';
import { ProfileQuestionaryComponent } from './../questionary/questionary.component';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileEditComponent } from '../profile-edit/edit.component';

@Component({
    selector: 'profile-steps',
    templateUrl: './steps.component.html',
    styleUrls: ['./steps.component.scss']
})
export class ProfileStepsComponent implements OnInit {

    /** */
    @ViewChild(ProfileEditComponent) profileEdit: ProfileEditComponent;

    /** */
    @ViewChild(ProfileQuestionaryComponent) profileQuestions: ProfileQuestionaryComponent;

    /** */
    profileFormGroup: FormGroup;

    /**
     * 
     */
    constructor(protected fb: FormBuilder,
        protected authService: AuthService,
        protected userResource: UserResource,
        protected matSnackBar: MatSnackBar,
        protected spinnerService: SpinnerService) {
    }
        
    /**
     * 
     */
    ngOnInit() {
        this.profileFormGroup = this.fb.group({
            profile: this.profileEdit.profileForm,
            questions: this.profileQuestions.questionsFormGroup
        })

    }

    /**
     * 
     */
    save() {
        let q = this.userResource.update(Object.assign(
            {id: this.authService.currentUser().id},
            this.profileFormGroup.get('profile').value,
            {questions: this.profileFormGroup.get('questions').value}    
        ));
        q.then(() => {
            this.matSnackBar.open("Erfolgreich gespeichert");
        })
        this.spinnerService.spinPromise(q);
    }

}