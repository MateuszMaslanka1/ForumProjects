import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {JsonServerService} from '../Services/json-server.service';
import {UserData} from '../model/UserData';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @ViewChild('addClassForButton', null) addClassForButton: ElementRef;

  constructor(private service: JsonServerService, private renderer: Renderer2) { }

  userName = '';
  userMessage = '';
  nameTooShort = false;
  messageTooShort = false;

  onAddMessage() {
    this.nameTooShort = this.userName.length < 3;
    this.messageTooShort = this.userMessage.length === 0;

    if (!this.nameTooShort && !this.messageTooShort) {

      this.service.sendToJson({userName: this.userName, userMessage: this.userMessage});
      this.userName = '';
      this.userMessage = '';
    }
  }

   buttonScaleOn() {
      this.addClassForButton.nativeElement.className = 'animated pulse infinite slow';
   }

  buttonScaleOff() {
    this.addClassForButton.nativeElement.className = '';
  }

  ngOnInit() {
  }

}
