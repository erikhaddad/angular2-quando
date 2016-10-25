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

    //dateTarget:string = "2017-07-27T00:00:00-07:00";
    //dateFormat:string = "YYYY-MM-DDThh:mm:ssZ";

    constructor(private auth: AuthService, public eventService: EventService) {
        //this.title = "Precious' 10th Birthday";
        //this.datetime = '2017-05-05';
        //this.image = 'users/inpZRUkiEIXaCFnsDOVGLpUUtHl2/Precious.JPG';
    }

    clear(): void {
        this.title = '';
        this.datetime = '';
        this.image = '';
        this.files = null;
    }

    onFileChange(event) {
        this.files = event.srcElement.files;
        console.log(this.files[0]);
    }

    submit(): void {
        console.log('detected submit');
        console.log(this.title, this.datetime, this.image);

        const title: string = this.title.trim();
        if (title.length && this.datetime.length && this.files.length > 0) {

            console.log('New Event', title, this.datetime, this.files[0]);
            // convert date string to moment readable format
            this.datetime += "T00:00:00";

            // upload image to Firebase storage


            var storage = firebase.storage();
            var storageRef = storage.ref();
            var fileForUpload = this.files[0];
            this.image = 'users/'+this.auth.id+'/'+fileForUpload.name;
            var userImagesRef = storageRef.child(this.image);
            //var userImagesRef = storageRef.child('users');

            //var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
            var uploadTask = userImagesRef.put(fileForUpload);

            let that = this;
            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                function (snapshot) {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
                    console.error(error);
                    /*
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;

                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                    */
                }, function () {
                    // Upload completed successfully, now we can get the download URL
                    //var downloadURL = uploadTask.snapshot.downloadURL;
                    //var downloadURL = snapshot.downloadURL;
                    //console.log('downloadURL', downloadURL);

                    //console.log('completed successfully');
                });

            // update the UI
            this.eventService.createUserEvent(title, this.datetime, this.image);

            this.clear();
        }
    }
}