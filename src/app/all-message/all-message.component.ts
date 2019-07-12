import { Component, OnInit } from '@angular/core';
import {JsonServerService} from '../Services/json-server.service';
import {UserData} from '../model/UserData';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-all-message',
  templateUrl: './all-message.component.html',
  styleUrls: ['./all-message.component.scss']
})
export class AllMessageComponent implements OnInit {

  constructor(private service: JsonServerService) { }

  items;
  jsonToBeUsed = [];
  item2;

  ngOnInit() {
     this.service.getFromJson().subscribe(response => {
     this.items = response;

     for (const type in response) {
         this.item2 = {};
         this.item2.key = type;
         this.item2.value = response[type];
         this.jsonToBeUsed.push(this.item2);
       }

     });
  }

}
