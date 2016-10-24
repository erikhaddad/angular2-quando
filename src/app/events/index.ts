import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from '../auth';

import {EventFormComponent} from './components/event-form';
import {EventItemComponent} from './components/event-item';
import {EventCardComponent} from './components/event-card';
import {EventGridComponent} from './components/event-grid';
import {EventsComponent} from './components/events';
import {AutoFocusDirective} from './directives/autofocus-directive';
import {EventService} from './services/event-service';

import { NgModule, Directive, HostBinding, Input } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MomentModule } from "angular2-moment";
import { UserBarComponent } from "../auth/components/user-bar.component";
import {EventCountdownComponent} from "./components/event-countdown";


/** ROUTES **/
const routes: Routes = [
    {
        path: 'events',
        component: EventsComponent,
        canActivate: [AuthGuard]
    }
];

/** HAMMERJS ERROR FIX **/
export class MyHammerConfig extends HammerGestureConfig  {
    overrides = <any>{
        'swipe': {velocity: 0.4, threshold: 20} // override default settings
    }
}

/** THESE ARE DIRECTIVES THAT WILL EVENTUALLY BE INTRODUCED TO ANGULAR MATERIAL 2 **/
@Directive({
    selector:'[layout]'
})
export class LayoutDirective{
    @Input() layout:string;
    @HostBinding('style.display') display = 'flex';

    @HostBinding('style.flex-direction')
    get direction(){
        return (this.layout === 'column') ? 'column':'row';
    }
}
@Directive({
    selector:'[flex]'
})
export class FlexDirective{
    @Input() shrink:number = 1;
    @Input() grow:number = 1;
    @Input() flex:string;

    @HostBinding('style.flex')
    get style(){
        return `${this.grow} ${this.shrink} ${this.flex === '' ? '0':this.flex}%`;
    }
}

/** MAIN MODULE **/
@NgModule({
    declarations: [
        FlexDirective,
        LayoutDirective,

        UserBarComponent,
        EventCountdownComponent,

        AutoFocusDirective,
        EventFormComponent,
        EventItemComponent,
        EventCardComponent,
        EventGridComponent,
        EventsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MomentModule,
        MaterialModule.forRoot(),
        RouterModule.forChild(routes)
    ],
    providers: [
        EventService,
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: MyHammerConfig
        }
    ]
})

export class EventsModule {}

export { EventService };