import { ProfileStepsComponent } from './components/profile-steps/steps.component';
import { Route } from '@angular/router';

export const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: ProfileStepsComponent
    }
]