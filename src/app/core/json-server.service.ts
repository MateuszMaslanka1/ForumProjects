import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserDataModel} from '../model/User-data-model';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {

  message;
  private addressList$ = new BehaviorSubject<Array<UserDataModel>>([]);

  constructor(private http: HttpClient, private angularFirestore: AngularFirestore) {}

  sendToJson(userDataComponent) {
    this.addressList$.next(userDataComponent);

    this.http.post<Array<UserDataModel>>('https://dbforforum.firebaseio.com/message.json', userDataComponent).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error.message);
      console.log(error.status);
    });
   }

   getFromJson() {
     return this.http.get<Array<UserDataModel>>(`https://dbforforum.firebaseio.com/message.json`);
   }

   deleteFromJson(userID: any) {
     const userRef = firebase.database().ref('message/' + userID);
     return userRef.remove();
   }
}
