import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SignInComponent} from './components/sign-in';
import {AuthGuard} from './guards/auth-guard';
import {UnauthGuard} from './guards/unauth-guard';
import {AuthService} from './services/auth-service';
import {MaterialModule} from "@angular/material";


const routes: Routes = [
    {
        path: '',
        component: SignInComponent,
        canActivate: [UnauthGuard]
    }
];


@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        MaterialModule.forRoot(),
        RouterModule.forChild(routes)
    ],
    providers: [
        AuthGuard,
        AuthService,
        UnauthGuard
    ]
})

export class AuthModule {

}

export {AuthGuard};
export {AuthService};
export {UnauthGuard};
