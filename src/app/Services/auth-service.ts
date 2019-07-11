import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import { of } from 'rxjs';

import { switchMap } from 'rxjs/operators';

import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AuthStateService } from './auth-state.service';


interface User {
  uid: string;
  email: string;
  displayName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router,
              private authStateService: AuthStateService) {
    this.user = this.afAuth.authState.pipe(
      switchMap((user) => user ? this.firestore.doc<User>(`user/${user.uid}`).valueChanges() : of(null)
    ));
  }

  googleLogin() {

      const provider = new firebase.auth.GoogleAuthProvider();
      return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then((credential) => {
      // this.authStateService.isAuthenticated.next(true);
      // console.log(this.authStateService.isAuthenticated);
      this.updateUserdata(credential.user);
    });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
      localStorage.clear();
      window.open('https://accounts.google.com/Logout', '_blank',
        'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400');
    });
  }

  private updateUserdata(user) {
    // console.log(this.hiddenService.view);
    const userRef: AngularFirestoreDocument<User> = this.firestore.doc(`user/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    return userRef;
  }
}




