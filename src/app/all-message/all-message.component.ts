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

  ngOnInit() {
    // console.log(this.service.getFromJson());
    this.items = this.service.getFromJson().subscribe(response => this.items = response );
  }

}
