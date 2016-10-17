import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { IEvent } from '../models/event';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'event-list',
  styleUrls: ['./event-list.scss'],
  templateUrl: 'event-list.html'
})

export class EventListComponent {
  @Input() filter: string;
  @Input() events: FirebaseListObservable<IEvent[]>;

  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);
}
