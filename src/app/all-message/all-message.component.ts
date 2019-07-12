import { Component, OnInit } from '@angular/core';
import {JsonServerService} from '../Services/json-server.service';
import {UserData} from '../model/UserData';
import {Observable} from 'rxjs';
import * as firebase from "firebase";

@Component({
  selector: 'app-all-message',
  templateUrl: './all-message.component.html',
  styleUrls: ['./all-message.component.scss']
})
export class AllMessageComponent implements OnInit {

  constructor(private service: JsonServerService) { }

  items;
  itemForShow = [];

  ngOnInit() {
     this.service.getFromJson().subscribe(response => {
     for (const type in response) {
         this.items = {};
         this.items.key = type;
         this.items.value = response[type];
         this.itemForShow.push(this.items);
       }
     });
  }

}
