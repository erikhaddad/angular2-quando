import {Component, ViewChild} from '@angular/core';
import {MdSidenav} from "@angular/material";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    title = 'Quando';
    text = 'When can we party again?';

    @ViewChild('sidenav') sidenav: MdSidenav;


    private assets = [
        "gs://quando-8082b.appspot.com/public/activity_high.png",
        "gs://quando-8082b.appspot.com/public/activity_low.png",
        "gs://quando-8082b.appspot.com/public/activity_mid.png",
        "gs://quando-8082b.appspot.com/public/alarm_day.png",
        "gs://quando-8082b.appspot.com/public/alarm_night.png",
        "gs://quando-8082b.appspot.com/public/alert.png",
        "gs://quando-8082b.appspot.com/public/birthday_1.png",
        "gs://quando-8082b.appspot.com/public/birthday_2.png",
        "gs://quando-8082b.appspot.com/public/brunch.png",
        "gs://quando-8082b.appspot.com/public/business_lunch.png",
        "gs://quando-8082b.appspot.com/public/coffee_books.png",
        "gs://quando-8082b.appspot.com/public/currency.png",
        "gs://quando-8082b.appspot.com/public/events.png",
        "gs://quando-8082b.appspot.com/public/family_meal.png",
        "gs://quando-8082b.appspot.com/public/fireplace.png",
        "gs://quando-8082b.appspot.com/public/flight_day.png",
        "gs://quando-8082b.appspot.com/public/flight_night.png",
        "gs://quando-8082b.appspot.com/public/from_your_circles.png",
        "gs://quando-8082b.appspot.com/public/gradient_blue.png",
        "gs://quando-8082b.appspot.com/public/gradient_green.png",
        "gs://quando-8082b.appspot.com/public/gradient_indigo.png",
        "gs://quando-8082b.appspot.com/public/gradient_purple.png",
        "gs://quando-8082b.appspot.com/public/indoor_directions.png",
        "gs://quando-8082b.appspot.com/public/late_night_eats.png",
        "gs://quando-8082b.appspot.com/public/local_favorites.png",
        "gs://quando-8082b.appspot.com/public/lunch_break.png",
        "gs://quando-8082b.appspot.com/public/mail.png",
        "gs://quando-8082b.appspot.com/public/meeting_day.png",
        "gs://quando-8082b.appspot.com/public/meeting_night.png",
        "gs://quando-8082b.appspot.com/public/movie_theater.png",
        "gs://quando-8082b.appspot.com/public/nightlife.png",
        "gs://quando-8082b.appspot.com/public/offers.png",
        "gs://quando-8082b.appspot.com/public/outdoors.png",
        "gs://quando-8082b.appspot.com/public/package_delivered.png",
        "gs://quando-8082b.appspot.com/public/package_shipped.png",
        "gs://quando-8082b.appspot.com/public/rainy_day.png",
        "gs://quando-8082b.appspot.com/public/reminders_day.png",
        "gs://quando-8082b.appspot.com/public/reminders_night.png",
        "gs://quando-8082b.appspot.com/public/snack.png",
        "gs://quando-8082b.appspot.com/public/sports_bar.png",
        "gs://quando-8082b.appspot.com/public/stocks_negative_1.png",
        "gs://quando-8082b.appspot.com/public/stocks_negative_2.png",
        "gs://quando-8082b.appspot.com/public/stocks_neutral_1.png",
        "gs://quando-8082b.appspot.com/public/stocks_neutral_2.png",
        "gs://quando-8082b.appspot.com/public/stocks_positive_1.png",
        "gs://quando-8082b.appspot.com/public/stocks_positive_2.png",
        "gs://quando-8082b.appspot.com/public/stopwatch_running.png",
        "gs://quando-8082b.appspot.com/public/stopwatch_stopped.png",
        "gs://quando-8082b.appspot.com/public/tapas.png",
        "gs://quando-8082b.appspot.com/public/tea_time.png",
        "gs://quando-8082b.appspot.com/public/time_at_home_day.png",
        "gs://quando-8082b.appspot.com/public/time_at_home_night.png",
        "gs://quando-8082b.appspot.com/public/tourists.png",
        "gs://quando-8082b.appspot.com/public/traffic_heavy_day.png",
        "gs://quando-8082b.appspot.com/public/traffic_heavy_night.png",
        "gs://quando-8082b.appspot.com/public/traffic_low_day.png",
        "gs://quando-8082b.appspot.com/public/traffic_low_night.png",
        "gs://quando-8082b.appspot.com/public/traffic_mid_day.png",
        "gs://quando-8082b.appspot.com/public/traffic_mid_night.png",
        "gs://quando-8082b.appspot.com/public/translate.png",
        "gs://quando-8082b.appspot.com/public/zagat_list.png"
    ];

    showAssets() {
        this.sidenav.open();
    }
}
