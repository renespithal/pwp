import { FormGroup, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { IUserImage } from './../../../../resources/user';
import { MatSnackBar } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';
import { Component, EventEmitter } from "@angular/core";
import { AuthService } from 'src/app/common/services/auth.service';

export function validateImageArrayLength(min: number) {

    return (control: AbstractControl) => {

        if ((control as FormArray).length < min) {
            return {
                need_more_images: true, 
                remaining_images: Math.abs((control as FormArray).length - min)
            };
        }

        return {}
    }
}

@Component({
    selector: 'profile-images',
    templateUrl: './profile-images.component.html',
    styleUrls: ['./profile-images.component.scss']
})
export class ProfileImageComponent {

    /**  */
    dropZoneOver: boolean = false;

    /**  */
    uploader : FileUploader;

    /**  */
    // images: IUserImage[] = [];

    /**  */
    imageForm: FormGroup;

    constructor(protected authService: AuthService,
        protected fb: FormBuilder,
        protected matSnackBar: MatSnackBar) {

            this.imageForm = this.fb.group({
                images: this.fb.array(this.authService.currentUser().images.map(i => {
                    return this.fb.control(i);
                }), [validateImageArrayLength(3)])
            })

        }

    ngOnInit() {

        
        this.uploader = new FileUploader({
            headers: [{name: 'Accept', value: 'application/json'}],
            url: `/api/user/${this.authService.currentUser().id}/uploadimage`,
            authToken: `Bearer ${this.authService.getToken()}`,
            itemAlias: 'file'
        });
        this.uploader.response.subscribe(e => {
            const json = JSON.parse(e);
            if (json.errors && json.errors.file) {
                this.matSnackBar.open("Fehler : " + json.errors.file.join(' '))
            } else if (json) {
                this.images.push(this.fb.control(json));
            }

            let remaining = this.uploader.queue.filter(i => {
                return !i.isUploaded;
            }).length;

            if (remaining == 1) {
                this.uploader.queue = [];
                this.uploader.progress = 0;
            }
        });
        
        
    }

    next() {
        if (!this.images.valid && this.images.hasError('need_more_images')) {
            this.matSnackBar.open(`Es werden noch mehr Bilder benötigt (${this.images.getError('remaining_images')} verbleibend)`);
        }
    }

    get images() {
        return this.imageForm.get('images') as FormArray;
    }

    /**
     * 
     * @param image 
     */
    removeImage(image: IUserImage) {
        this.images.removeAt(this.images.value.indexOf(image))
    }

    /**
     * 
     * @param event 
     */
    fileDrop(event) {


        // Exit wenn Upload läuft
        if (this.uploader.isUploading) return;
        this.uploader.queue.map(file => file.upload());
        

        // this.ngOnInit();

    }

    /**
     * 
     * @param event 
     */
    fileOver(event) {
        this.dropZoneOver = event;
    }

}