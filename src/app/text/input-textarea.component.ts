import {Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {JsonServerService} from '../Services/json-server.service';
import {UserData} from '../model/UserData';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MonoDialogComponent} from '../mono-dialog/mono-dialog.component';


@Component({
  selector: 'app-text',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent implements OnInit {

  @ViewChild('addClassForButton', null) addClassForButton: ElementRef;

  constructor(private service: JsonServerService, private renderer: Renderer2, public dialog: MatDialog) { }

  userName = '';
  userMessage = '';
  nameTooShort = false;
  messageTooShort = false;

  onAddMessage() {
    this.nameTooShort = this.userName.length < 3;
    this.messageTooShort = this.userMessage.length === 0;

    this.dialog.open(MonoDialogComponent, {});

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

