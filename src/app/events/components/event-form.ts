import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../../auth/services/auth-service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'event-form',
    styleUrls: ['./event-form.scss'],
    templateUrl: 'event-form.html'
})

export class EventFormComponent {
    @Output() createEvent = new EventEmitter(false);

    title: string = '';
    datetime: string = '';
    image: string = '';

    constructor(private auth: AuthService) {
        console.log('event-form', auth);
    }

    clear(): void {
        this.title = '';
        this.datetime = '';
        this.image = '';
    }

    submit(): void {
        const title: string = this.title.trim();
        if (title.length && this.datetime.length && this.image.length) {
            // convert date string to moment readable format


            // upload image to Firebase storage
            let that = this;

            var storage = firebase.storage();
            var storageRef = storage.ref();
            var userImagesRef = storageRef.child('users/'+this.auth.id);

            userImagesRef.put(this.image).then(
                function () {


                }).catch(function(error) {
                    //console.error(error);
                });


            // update the UI
            //this.createEvent.emit(title);


            this.clear();
        }
    }
}