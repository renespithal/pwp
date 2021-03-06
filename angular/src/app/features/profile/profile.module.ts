import { ProfileQuestionaryComponent } from './components/questionary/questionary.component';
import { ProfileEditComponent } from './components/profile-edit/edit.component';
import { CommonModule } from './../../common/common.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ProfileStepsComponent } from './components/profile-steps/steps.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileImageComponent } from './components/profile-images/profile-images.component';

@NgModule({
    declarations: [
        ProfileStepsComponent,
        ProfileEditComponent,
        ProfileQuestionaryComponent,
        ProfileImageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileModule {}