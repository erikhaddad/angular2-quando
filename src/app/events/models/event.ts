/* tslint:disable:no-string-literal */

export interface IEvent {
    $key?: string;
    completed: boolean;
    createdAt: number;
    title: string;
    image: string;
}

export class Event implements IEvent {
    completed: boolean = false;
    createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];
    title: string;
    image: string;

    constructor(title: string) {
        this.title = title;
    }
}