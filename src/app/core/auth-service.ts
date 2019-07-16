import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

import {switchMap} from 'rxjs/operators';

import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {UserIdModel} from '../model/User-id-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    user: Observable<UserIdModel>;

  constructor(private angularFireAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) {
    this.user = this.angularFireAuth.authState.pipe(
      switchMap((user) => user ? this.firestore.doc<UserIdModel>(`user/${user.uid}`).valueChanges() : of(null)
    ));
  }

  googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      return this.oAuthLogin(provider);
  }

  signOut() {
    this.angularFireAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
      localStorage.clear();
      window.open('https://accounts.google.com/Logout', '_blank',
        'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400');
    });
  }

  private oAuthLogin(provider) {
    return this.angularFireAuth.auth.signInWithPopup(provider).then((credential) => {
      console.log(credential.user.uid);
      this.router.navigate(['/']);
      this.updateUserdata(credential.user);
    });
  }

  private updateUserdata(user) {
    const userRef: AngularFirestoreDocument<UserIdModel> = this.firestore.doc(`user/${user.uid}`);
    const data: UserIdModel = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    return userRef;
  }
}




