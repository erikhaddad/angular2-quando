import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {MomentModule} from "angular2-moment";
import * as moment from 'moment';

@Component({
    selector: 'event-countdown',
    styleUrls: ['./event-countdown.scss'],
    templateUrl: 'event-countdown.html'
})

export class EventCountdownComponent implements OnInit {

    title: string = 'My next birthday is in';
    _moment: MomentModule;
    window: Window;

    /** Converted from old ng1 project **/
    $body:HTMLElement;
    $ink:HTMLElement;

    theme:string = "theme-0";
    debug:boolean = false;
    animating:boolean = false;
    stopTimer:boolean = false;

    dateLocale:string = "en-US";

    dateTarget:string = "2017-07-27T00:00:00-07:00";
    dateFormat:string = "YYYY-MM-DDThh:mm:ssZ";

    now:number;
    then:number;

    dhms = {
        day: {
            value: '0',
            label: "days"
        },
        hr: {
            value: '0',
            label: "hours"
        },
        min: {
            value: '0',
            label: "minutes"
        },
        sec: {
            value: '0',
            label: "seconds"
        }
    };

    constructor() {

    }

    ngOnInit(): void {
        this.$body = document.body;
        //@ViewChild('eventCountdown') $body:ElementRef;
        this.$ink = <HTMLElement>this.$body.querySelector('#ink');

        // currently, this does nothing
        //moment.locale(this.dateLocale);

        // now and then
        this.now = moment().milliseconds();
        this.then = moment(this.dateTarget, this.dateFormat).milliseconds();

        this.tick();
    }


    createRandomRipple() {
        if (typeof this.window !== 'undefined') {
            var top = Math.floor(Math.random() * this.window.innerHeight) + 1;
            var left = Math.floor(Math.random() * this.window.innerWidth) + 1;

            this.createRipple(top + 'px', left + 'px');
        }
    }

    createRipple(top: string, left: string) {
        this.$ink.style.top = top;
        this.$ink.style.left = left;
        if (!!this.theme) {
            this.$body.classList.remove(this.theme);
        }
        this.theme = 'theme-' + Math.floor((Math.random() * 20) + 1);
        this.$body.classList.add(this.theme);
        this.$ink.classList.add('active');

        setTimeout(function () {
            this.$body.style.backgroundColor = this.window.getComputedStyle(this.$ink)['background-color'];
            this.$ink.style.top = this.$ink.style.left = this.$ink.style.height = this.$ink.style.width = '';
            this.$ink.classList.remove('active');
            this.animating = false;
        }, 600);
    }


    tick () {
        console.log('Now: ', moment(), 'Then: ', moment(this.dateTarget, this.dateFormat));
        this.now = moment().milliseconds();

        var ms = moment().diff(moment(this.dateTarget,this.dateFormat));
        //var duration = moment.duration(ms);
        var duration = moment.duration(moment(this.dateTarget,this.dateFormat).diff(moment()));
        /*
        var diff = this.then - this.now;
        var duration:moment.Duration = moment.duration(diff, "ms");
        */

        console.log('Duration: ', duration.asMilliseconds());
        var diffFormatted:string = duration.days() + " " + duration.hours() + " " + duration.minutes() + " " + duration.seconds();
        console.log('Duration formatted: ', diffFormatted);
        var diffSplit = diffFormatted.split(' ');
        this.dhms = {
            day: {
                value: diffSplit.length < 4 ? '0' : diffSplit[diffSplit.length - 4],
                label: "day"
            },
            hr: {
                value: diffSplit.length < 3 ? '0' : diffSplit[diffSplit.length - 3],
                label: "hour"
            },
            min: {
                value: diffSplit.length < 2 ? '0' : diffSplit[diffSplit.length - 2],
                label: "minute"
            },
            sec: {
                value: diffSplit.length < 1 ? '0' : diffSplit[diffSplit.length - 1],
                label: "second"
            }
        };

        if (this.dhms.sec.value === '0') {
            this.createRandomRipple();
        }

        if (diffSplit.length === 1 && diffSplit[0] === "0") {
            this.stopTimer = true;
        }

        if (this.dhms.day.value != '1') {
            this.dhms.day.label += 's';
        }
        if (this.dhms.hr.value != '1') {
            this.dhms.hr.label += 's';
        }
        if (this.dhms.min.value != '1') {
            this.dhms.min.label += 's';
        }
        if (this.dhms.sec.value != '1') {
            this.dhms.sec.label += 's';
        }

        if (this.debug) {
            console.log("Now", this.now);
            console.log("Then", this.then);
            //console.log("Diff", diff);
            console.log("Duration ms", duration);
            console.log("Diff formatted", diffFormatted);
        }

        let that = this;
        setTimeout(function () {
            if (!that.stopTimer) {
                that.tick();
            } else {
                if (typeof that.window !== 'undefined') {
                    that.createRipple(
                        (Math.floor(Math.random() * that.window.innerHeight) + 1) + 'px',
                        (Math.floor(Math.random() * that.window.innerWidth) + 1) + 'px');
                }
            }
        }, 1000);
    };

    makeWaves(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        if (!this.animating) {
            this.animating = true;
            this.createRipple(evt.pageY - 50 + 'px', evt.pageX - 50 + 'px');
        }
    };

    getCountdownText() {
        return this.title;
    };

}