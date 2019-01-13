import { FileUploader } from 'ng2-file-upload';
import { Component, EventEmitter } from "@angular/core";
import { AuthService } from 'src/app/common/services/auth.service';

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

    constructor(protected authService: AuthService) {}

    ngOnInit() {
        this.uploader = new FileUploader({
            headers: [{name: 'Accept', value: 'application/json'}],
            url: `/api/user/${this.authService.currentUser().id}/uploadimage`,
            authToken: `Bearer ${this.authService.getToken()}`,
            itemAlias: 'file'
        });
        this.uploader.response.subscribe(e => {
            if (e) {
                const json = JSON.parse(e);

            }
        });
        
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