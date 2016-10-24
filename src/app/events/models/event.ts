/* tslint:disable:no-string-literal */

export interface IEvent {
    $key?: string;
    createdAt: number;
    title: string;
    datetime: string;
    image: string;
}

export class Event implements IEvent {
    createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];
    title: string;
    datetime: string;
    image: string;

    constructor(title: string, datetime: string, image: string) {
        this.title = title;
        this.datetime = datetime;
        this.image = image;
    }
}