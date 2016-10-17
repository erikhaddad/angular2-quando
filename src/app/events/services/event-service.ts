import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from '../../auth/services/auth-service';
import { IEvent, Event } from '../models/event';


@Injectable()
export class EventService {
  visibleEvents$: Observable<IEvent[]>;

  private filter$: ReplaySubject<any> = new ReplaySubject(1);
  private filteredEvents$: FirebaseListObservable<IEvent[]>;
  private events$: FirebaseListObservable<IEvent[]>;


  constructor(af: AngularFire, auth: AuthService) {
    const path = `/events/${auth.id}`;

    this.events$ = af.database.list(path);

    this.filteredEvents$ = af.database.list(path, {query: {
      orderByChild: 'completed',
      equalTo: this.filter$
    }});

    this.visibleEvents$ = this.filter$
      .switchMap(filter => filter === null ? this.events$ : this.filteredEvents$);
  }


  filterEvents(filter: string): void {
    switch (filter) {
      case 'false':
        this.filter$.next(false);
        break;

      case 'true':
        this.filter$.next(true);
        break;

      default:
        this.filter$.next(null);
        break;
    }
  }

  createEvent(title: string): firebase.Promise<any> {
    return this.events$.push(new Event(title));
  }

  removeEvent(event: IEvent): firebase.Promise<any> {
    return this.events$.remove(event.$key);
  }

  updateEvent(event: IEvent, changes: any): firebase.Promise<any> {
    return this.events$.update(event.$key, changes);
  }
}
