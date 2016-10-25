import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth-service';


@Component({
    selector: 'user-bar',
    styleUrls: ['./user-bar.component.scss'],
    templateUrl: 'user-bar.component.html'
})

export class UserBarComponent {

    window: Window;

    constructor(private auth: AuthService, private router: Router) {

    }

    isSignedIn(): boolean {
        return (!this.auth ? false : this.auth.authenticated);
    }

    signInWithGoogle(): void {
        this.auth.signInWithGoogle()
            .then(() => this.postSignIn());
    }

    signOut(): void {
        this.auth.signOut();
        this.postSignOut();
    }

    private postSignIn(): void {
        this.router.navigate(['/events']);
    }
    private postSignOut(): void {
        window.location.href = '/';

        // This wasn't working
        //this.router.navigate(['/']);
    }
}
