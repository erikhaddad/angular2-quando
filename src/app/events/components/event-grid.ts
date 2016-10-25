import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { IEvent } from '../models/event';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'event-grid',
  styleUrls: ['./event-grid.scss'],
  templateUrl: 'event-grid.html'
})

export class EventGridComponent {
  @Input() events: FirebaseListObservable<IEvent[]>;

  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);
}