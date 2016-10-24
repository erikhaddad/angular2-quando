import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {AuthService} from '../../auth/services/auth-service';
import {IEvent, Event} from '../models/event';


@Injectable()
export class EventService {
    private _allEvents$: FirebaseListObservable<IEvent[]>;
    private _userEvents$: FirebaseListObservable<IEvent[]>;

    constructor(af: AngularFire, auth: AuthService) {
        const allEventsPath = `/events`;
        this._allEvents$ = af.database.list(allEventsPath);

        const userEventsPath = `/users/${auth.id}/events`;
        this._userEvents$ = af.database.list(userEventsPath);
    }


    get allEvents(): FirebaseListObservable<IEvent[]> {
        return this._allEvents$;
    }

    get userEvents(): FirebaseListObservable<IEvent[]> {
        return this._userEvents$;
    }

    /** PUBLIC EVENTS **/
    createPublicEvent(title: string, datetime: string, image: string): firebase.Promise<any> {
        return this._allEvents$.push(new Event(title, datetime, image));
    }

    removePublicEvent(event: IEvent): firebase.Promise<any> {
        return this._allEvents$.remove(event.$key);
    }

    updatePublicEvent(event: IEvent, changes: any): firebase.Promise<any> {
        return this._allEvents$.update(event.$key, changes);
    }

    /** USER-CENTRIC EVENTS **/
    createUserEvent(title: string, datetime: string, image: string): firebase.Promise<any> {
        return this._userEvents$.push(new Event(title, datetime, image));
    }

    removeUserEvent(event: IEvent): firebase.Promise<any> {
        return this._userEvents$.remove(event.$key);
    }

    updateUserEvent(event: IEvent, changes: any): firebase.Promise<any> {
        return this._userEvents$.update(event.$key, changes);
    }
}
