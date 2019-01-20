import { MatchingComponent } from './matching.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from 'src/app/common/common.module';

@NgModule({
    declarations: [
        MatchingComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: MatchingComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MatchingModule {}