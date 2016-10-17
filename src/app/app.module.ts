import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule } from './auth';
import { FirebaseModule } from './firebase';
import { EventsModule } from './events';

import { AppComponent } from './app.component';
import { QuandoRoutingModule } from "./app-routing.module";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AuthModule,
        FirebaseModule,
        EventsModule,
        QuandoRoutingModule
    ],
    providers: [
    ]
})

export class AppModule {

}
