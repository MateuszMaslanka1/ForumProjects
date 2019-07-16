import {Component, OnInit} from '@angular/core';
import {JsonServerService} from '../core/json-server.service';

@Component({
  selector: 'app-all-message',
  templateUrl: './all-message.component.html',
  styleUrls: ['./all-message.component.scss']
})
export class AllMessageComponent implements OnInit {

  items;
  itemForShow = [];

  constructor(private service: JsonServerService) { }

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

  takeMessageKey(event: any) {
      this.service.deleteFromJson(event.key).then(variable => {
        this.itemForShow = this.itemForShow.filter(el =>
          el.key !== event.key
        );
      });
  }

}
