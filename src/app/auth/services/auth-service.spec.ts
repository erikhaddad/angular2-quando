import {TestBed, inject} from '@angular/core/testing';
import {Subject} from 'rxjs/Subject';
import {AuthProviders, FirebaseAuth, FirebaseAuthState} from 'angularfire2';
import {AuthService} from './auth-service';


const fbAuthMethods = [
    'subscribe'
    // ... etc
];


describe('auth/', () => {
    describe('AuthService', () => {
        let authService;
        let authSubject;
        let mockFirebaseAuth;

        beforeEach(() => {
            authSubject = new Subject<FirebaseAuthState>();

            mockFirebaseAuth = jasmine.createSpyObj('fbAuth', fbAuthMethods);
            mockFirebaseAuth.subscribe.and.callFake(callback => {
                authSubject.subscribe(callback);
            });

            // I don't think this will actually work but it clears compiler errors!
            TestBed.configureTestingModule({
                declarations: [
                    //SomeComponent
                ],
                imports: [
                    // HttpModule, etc.
                ],
                providers: [
                    {
                        provide: FirebaseAuth,
                        useValue: mockFirebaseAuth
                    },
                    AuthService
                ]
            });
            /*
            addProviders([
                {provide: FirebaseAuth, useValue: mockFirebaseAuth},
                AuthService
            ]);
            */

            inject([AuthService], (service: AuthService) => {
                authService = service;
            })();
        });

        it('should be defined', () => {
            expect(authService).toBeDefined();
        });

        it('should subscribe to auth state changes', () => {
            expect(authService.authState).toBe(null);

            let authData = {
                uid: '12345',
                provider: AuthProviders.Github,
                auth: {
                    displayName: 'John Doe',
                    providerId: 'github.com'
                }
            } as FirebaseAuthState;

            authSubject.next(authData);
            expect(authService.authState).toBe(authData);
        });
    });
});
