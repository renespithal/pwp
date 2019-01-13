import { SpinnerComponent } from './spinner.component';
import { NgModule } from "@angular/core";
import { MatProgressSpinnerModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { timeout } from 'q';

@NgModule({
    declarations: [
        SpinnerComponent
    ],
    exports: [
        SpinnerComponent,
        MatProgressSpinnerModule
    ],
    imports: [
        MatProgressSpinnerModule,
        CommonModule
    ]
})
export class SpinnerModule {

}