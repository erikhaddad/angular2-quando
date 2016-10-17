import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';


@Component({
  styleUrls: ['./sign-in.scss'],
  templateUrl: 'sign-in.html'
})

export class SignInComponent {
  constructor(private auth: AuthService, private router: Router) {}

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.router.navigate(['/events']);
  }
}
