import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit,
    ChangeDetectorRef
} from '@angular/core';
import {Event} from "../models/event";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
    //changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'event-card',
    styleUrls: ['./event-card.scss'],
    templateUrl: 'event-card.html'
})

export class EventCardComponent implements OnInit {
    @Input() event: Event;
    @Output() remove = new EventEmitter(false);
    @Output() update = new EventEmitter(false);

    editing: boolean = false;
    title: string = '';

    private _trustedImageUrl:SafeUrl;

    constructor(private sanitizer: DomSanitizer, private changeDetector: ChangeDetectorRef) {
        this.trustedImageUrl = sanitizer.bypassSecurityTrustUrl("/assets/activity_high.png");
    }

    ngOnInit(): void {
        let that = this;

        var storage = firebase.storage();
        var storageRef = storage.ref();
        var imgRef = storageRef.child(this.event.image);

        imgRef.getDownloadURL().then(
            function (downloadUrl) {
                that.trustedImageUrl = that.sanitizer.bypassSecurityTrustUrl(downloadUrl);

                // HACK due to img tag src not picking up changes naturally
                that.changeDetector.detectChanges();

            }).catch(function(error) {
                //console.error(error);
                /*
                 switch (error.code) {
                 case 'storage/object_not_found':
                 // File doesn't exist
                 break;

                 case 'storage/unauthorized':
                 // User doesn't have permission to access the object
                 break;

                 case 'storage/canceled':
                 // User canceled the upload
                 break;

                 case 'storage/unknown':
                 // Unknown error occurred, inspect the server response
                 break;
                 }
                 */
            });
    }

    editTitle(): void {
        this.editing = true;
        this.title = this.event.title;
    }

    saveTitle(): void {
        if (this.editing) {
            const title: string = this.title.trim();
            if (title.length && title !== this.event.title) {
                this.update.emit({title});
            }
            this.stopEditing();
        }
    }

    stopEditing(): void {
        this.editing = false;
    }


    get trustedImageUrl(): SafeUrl {
        return this._trustedImageUrl;
    }

    set trustedImageUrl(value: SafeUrl) {
        this._trustedImageUrl = value;
    }
}