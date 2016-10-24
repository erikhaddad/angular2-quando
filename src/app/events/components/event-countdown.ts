import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit,
    ChangeDetectorRef
} from '@angular/core';
import {Event} from "../models/event";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
    selector: 'event-countdown',
    styleUrls: ['./event-countdown.scss'],
    templateUrl: 'event-countdown.html'
})

export class EventCountdownComponent implements OnInit {

    constructor() {

    }

    ngOnInit(): void {
        this.tick();
    }

    tick():void {

    }

}