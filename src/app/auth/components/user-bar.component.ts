import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth-service';


@Component({
    selector: 'user-bar',
    styleUrls: ['./user-bar.component.scss'],
    templateUrl: 'user-bar.component.html'
})

export class UserBarComponent {

    constructor(private auth: AuthService, private router: Router) {
        console.log(auth);
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
    }

    private postSignIn(): void {
        this.router.navigate(['/events']);
    }
}
