import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../../auth/services/auth-service";
import {EventService} from "../services/event-service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'event-form',
    styleUrls: ['./event-form.scss'],
    templateUrl: 'event-form.html'
})

export class EventFormComponent {
    @Output() createEvent = new EventEmitter(false);

    title: string;
    datetime: string;
    files: FileList;
    image: string;

    hintText:string = "YYYY-MM-DD";

    constructor(private auth: AuthService, public eventService: EventService) {

    }

    clear(): void {
        this.title = '';
        this.datetime = '';
        this.image = '';
        this.files = null;
    }

    onFileChange(event) {
        this.files = event.srcElement.files;
    }

    submit(): void {
        const title: string = this.title.trim();
        if (title.length && this.datetime.length && this.files.length > 0) {
            // convert date string to moment readable format
            this.datetime += "T00:00:00";

            var fileForUpload = this.files[0];
            this.image = 'users/'+this.auth.id+'/'+fileForUpload.name;

            var storage = firebase.storage();
            var storageRef = storage.ref();
            var userImagesRef = storageRef.child(this.image);
            var uploadTask = userImagesRef.put(fileForUpload);

            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                function (snapshot) {
                    // Get task progress, including the number of bytes
                    // uploaded and the total number of bytes to be uploaded
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                            console.log('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                            console.log('Upload is running');
                            break;
                    }
                }, function (error) {
                    // Upload failed
                    console.error(error);
                }, function () {
                    // Upload completed successfully
                    console.log('Upload was successful');
                });

            // update the UI
            this.eventService.createUserEvent(title, this.datetime, this.image);

            this.clear();
        }
    }
}