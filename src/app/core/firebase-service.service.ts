import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserCredentialsModel} from '../model/user-credentials-model';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  message;
  private addressList$ = new BehaviorSubject<Array<UserCredentialsModel>>([]);

  constructor(private http: HttpClient, private angularFirestore: AngularFirestore) {}

  sendToJson(userDataComponent) {
    this.addressList$.next(userDataComponent);

    this.http.post<Array<UserCredentialsModel>>('https://dbforforum.firebaseio.com/message.json', userDataComponent).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error.message);
      console.log(error.status);
    });
   }

   getFromJson() {
     return this.http.get<Array<UserCredentialsModel>>(`https://dbforforum.firebaseio.com/message.json`);
   }

   deleteFromJson(userID: any) {
     const userRef = firebase.database().ref('message/' + userID);
     return userRef.remove();
   }
}
