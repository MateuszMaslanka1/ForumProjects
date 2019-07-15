import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import { of } from 'rxjs';


import { switchMap } from 'rxjs/operators';

import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AuthStateService } from './auth-state.service';
import {UserID} from '../model/UserID';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    user: Observable<UserID>;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router,
              private authStateService: AuthStateService) {
    this.user = this.afAuth.authState.pipe(
      switchMap((user) => user ? this.firestore.doc<UserID>(`user/${user.uid}`).valueChanges() : of(null)
    ));
  }

  googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then((credential) => {
       console.log(credential.user.uid);
       this.router.navigate(['/']);
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
    const userRef: AngularFirestoreDocument<UserID> = this.firestore.doc(`user/${user.uid}`);
    const data: UserID = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    return userRef;
  }
}




