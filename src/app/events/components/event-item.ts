import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Event} from "../models/event";


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'event-item',
    styleUrls: ['./event-item.scss'],
    templateUrl: 'event-item.html'
})

export class EventItemComponent {
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