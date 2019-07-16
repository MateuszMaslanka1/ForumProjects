import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserData} from '../model/UserData';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import {environment} from '../../environments/environment';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {

   notesCollection: AngularFirestoreCollection<UserData>;

   note: Observable<UserData[]>;

  message;

  constructor(private http: HttpClient, private angularFirestore: AngularFirestore) {

  }

  private addressList$ = new BehaviorSubject<Array<UserData>>([]);

  sendToJson(userDataComponent) {
    this.addressList$.next(userDataComponent);

    this.http.post<Array<UserData>>('https://dbforforum.firebaseio.com/message.json', userDataComponent).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error.message);
      console.log(error.status);
    });
   }

   getFromJson() {
       // this.notesCollection = this.angularFirestore.collection('message');
       // console.log(this.notesCollection);
       // return this.note = this.notesCollection.valueChanges();
      // return this.http.get<Array<UserData>>('http://localhost:3000/message');
     return this.http.get<Array<UserData>>(`https://dbforforum.firebaseio.com/message.json`);
   }

   deleteFromJson(userID: any) {
     const userRef = firebase.database().ref('message/' + userID);
     return userRef.remove();
   }
}
