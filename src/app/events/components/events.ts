import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {EventService} from '../services/event-service';
import {Event} from '../models/event';


@Component({
    styleUrls: ['events.scss'],
    templateUrl: 'events.html',
    encapsulation: ViewEncapsulation.None
})

export class EventsComponent {
    allEvents: Observable<any>;
    userEvents: Observable<any>;

    constructor(public eventService: EventService) {
        this.allEvents = eventService.allEvents;
        this.userEvents = eventService.userEvents;
    }

    bootstrapEvents() {
        let events = [
            {
                "title": "NBA Season",
                "image": "public/sports_bar.png",
                "datetime": "2016-10-26T00:00:00Z"
            },
            {
                "title": "Halloween",
                "image": "public/alert.png",
                "datetime": "2016-10-31T00:00:00"
            },
            {
                "title": "All Saints' Day",
                "image": "public/activity_high.png",
                "datetime": "2016-11-01T00:00:00"
            },
            {
                "title": "Doctor Strange",
                "image": "public/movie_theater.png",
                "datetime": "2016-11-04T00:00:00"
            },
            {
                "title": "Guy Fawkes Night",
                "image": "public/reminders_night.png",
                "datetime": "2016-11-05T00:00:00"
            },
            {
                "title": "Election Day in US",
                "image": "public/stocks_neutral_1.png",
                "datetime": "2016-11-08T00:00:00"
            },
            {
                "title": "Veterans Day",
                "image": "public/gradient_indigo.png",
                "datetime": "2016-11-11T00:00:00"
            },
            {
                "title": "Thanksgiving in US",
                "image": "public/traffic_heavy_day.png",
                "datetime": "2016-11-24T00:00:00"
            },
            {
                "title": "Black Friday in US",
                "image": "public/package_shipped.png",
                "datetime": "2016-11-25T00:00:00"
            },
            {
                "title": "Rogue One: A Star Wars Story",
                "image": "public/movie_theater.png",
                "datetime": "2016-12-16T00:00:00"
            },
            {
                "title": "Winter",
                "image": "public/rainy_day.png",
                "datetime": "2016-12-21T10:45:29Z"
            },
            {
                "title": "December Solstice",
                "image": "public/gradient_blue.png",
                "datetime": "2016-12-21T10:45:29Z"
            },
            {
                "title": "Christmas Eve",
                "image": "public/fireplace.png",
                "datetime": "2016-12-24T00:00:00"
            },
            {
                "title": "Christmas Day",
                "image": "public/family_meal.png",
                "datetime": "2016-12-25T00:00:00"
            },
            {
                "title": "Boxing Day",
                "image": "public/package_delivered.png",
                "datetime": "2016-12-26T00:00:00"
            },
            {
                "title": "New Year's Eve",
                "image": "public/snack.png",
                "datetime": "2016-12-31T00:00:00"
            },
            {
                "title": "New Year's Day",
                "image": "public/birthday_2.png",
                "datetime": "2017-01-01T00:00:00"
            },
            {
                "title": "Friday the 13th",
                "image": "public/meeting_night.png",
                "datetime": "2017-01-13T00:00:00"
            },
            {
                "title": "Martin Luther King Jr Day",
                "image": "public/meeting_day.png",
                "datetime": "2017-01-16T00:00:00"
            },
            {
                "title": "US Presidential Inauguration",
                "image": "public/events.png",
                "datetime": "2017-01-20T17:00:00Z"
            },
            {
                "title": "Australia Day",
                "image": "public/outdoors.png",
                "datetime": "2017-01-26T00:00:00"
            },
            {
                "title": "Holocaust Memorial Day",
                "image": "public/gradient_indigo.png",
                "datetime": "2017-01-27T00:00:00"
            },
            {
                "title": "Groundhog Day",
                "image": "public/activity_high.png",
                "datetime": "2017-02-02T00:00:00"
            },
            {
                "title": "Super Bowl",
                "image": "public/sports_bar.png",
                "datetime": "2017-02-05T00:00:00"
            },
            {
                "title": "Valentine's Day",
                "image": "public/mail.png",
                "datetime": "2017-02-14T00:00:00"
            },
            {
                "title": "Presidents' Day in US",
                "image": "public/activity_high.png",
                "datetime": "2017-02-20T00:00:00"
            },
            {
                "title": "Mardi Gras (Fat Tuesday)",
                "image": "public/nightlife.png",
                "datetime": "2017-02-28T00:00:00"
            },
            {
                "title": "Ash Wednesday",
                "image": "public/gradient_green.png",
                "datetime": "2017-03-01T00:00:00"
            },
            {
                "title": "Lent (Catholic)",
                "image": "public/gradient_green.png",
                "datetime": "2017-03-01T00:00:00"
            },
            {
                "title": "Daylight Saving/Clocks Change in US",
                "image": "public/alarm_day.png",
                "datetime": "2017-03-12T02:00:00"
            },
            {
                "title": "Pi Day",
                "image": "public/tea_time.png",
                "datetime": "2017-03-14T00:00:00"
            },
            {
                "title": "Saint Patrick's Day",
                "image": "public/gradient_green.png",
                "datetime": "2017-03-17T00:00:00"
            },
            {
                "title": "Spring",
                "image": "public/outdoors.png",
                "datetime": "2017-03-20T10:30:00Z"
            },
            {
                "title": "Mother's Day in the UK",
                "image": "public/mail.png",
                "datetime": "2017-03-26T00:00:00"
            },
            {
                "title": "Clocks Change in UK",
                "image": "public/alarm_day.png",
                "datetime": "2017-03-26T01:00:00Z"
            },
            {
                "title": "April Fools' Day",
                "image": "public/stopwatch_stopped.png",
                "datetime": "2017-04-01T00:00:00"
            },
            {
                "title": "Palm Sunday",
                "image": "public/stopwatch_running.png",
                "datetime": "2017-04-09T00:00:00"
            },
            {
                "title": "Good Friday",
                "image": "public/gradient_green.png",
                "datetime": "2017-04-14T00:00:00"
            },
            {
                "title": "Easter",
                "image": "public/traffic_heavy_day.png",
                "datetime": "2017-04-16T00:00:00"
            },
            {
                "title": "Earth Day",
                "image": "public/outdoors.png",
                "datetime": "2017-04-22T00:00:00"
            },
            {
                "title": "Cinco De Mayo",
                "image": "public/nightlife.png",
                "datetime": "2017-05-05T00:00:00"
            },
            {
                "title": "Mother's Day in US",
                "image": "public/mail.png",
                "datetime": "2017-05-14T00:00:00"
            },
            {
                "title": "Memorial Day",
                "image": "public/gradient_indigo.png",
                "datetime": "2017-05-29T00:00:00"
            },
            {
                "title": "Father's Day",
                "image": "public/mail.png",
                "datetime": "2017-06-18T00:00:00"
            },
            {
                "title": "Summer",
                "image": "public/tourists.png",
                "datetime": "2017-06-21T04:25:14Z"
            },
            {
                "title": "Canada Day",
                "image": "public/alert.png",
                "datetime": "2017-07-01T00:00:00"
            },
            {
                "title": "Wimbledon",
                "image": "public/sports_bar.png",
                "datetime": "2017-07-03T00:00:00Z"
            },
            {
                "title": "Independence Day",
                "image": "public/lunch_break.png",
                "datetime": "2017-07-04T00:00:00"
            },
            {
                "title": "Father's Day (Aus/NZ)",
                "image": "public/mail.png",
                "datetime": "2017-09-03T00:00:00"
            },
            {
                "title": "Labor Day",
                "image": "public/meeting_day.png",
                "datetime": "2017-09-04T00:00:00"
            }
        ];
        
        for(var e=0; e<events.length; e++) {
            var thisEvent = events[e];

            this.eventService.createPublicEvent(thisEvent.title, thisEvent.datetime, thisEvent.image);

            //var newEvent = new Event(thisEvent.title, thisEvent.datetime, thisEvent.image);
            //this.eventService.createPublicEvent(newEvent);
        }
    }
}