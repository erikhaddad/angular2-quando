import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Event} from "../models/event";


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'event-card',
    styleUrls: ['./event-card.scss'],
    templateUrl: 'event-card.html'
})

export class EventCardComponent {
    @Input() event: Event;
    @Output() remove = new EventEmitter(false);
    @Output() update = new EventEmitter(false);

    editing: boolean = false;
    title: string = '';

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

    toggleStatus(): void {
        this.update.emit({
            completed: !this.event.completed
        });
    }
}