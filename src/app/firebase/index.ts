import { AngularFireModule, AuthMethods } from 'angularfire2';

const firebaseConfig = {
    apiKey: "AIzaSyAcGidvkgOUI0K4jcmmSiv2uYEdUIQaQTw",
    authDomain: "quando-8082b.firebaseapp.com",
    databaseURL: "https://quando-8082b.firebaseio.com",
    storageBucket: "quando-8082b.appspot.com",
    messagingSenderId: "137655918325"
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
