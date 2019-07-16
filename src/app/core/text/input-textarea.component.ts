import {Component, ElementRef, ViewChild} from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {MonoDialogComponent} from '../mono-dialog/mono-dialog.component';


@Component({
  selector: 'app-text',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent {

  @ViewChild('addClassForButton', null) addClassForButton: ElementRef;
  userName = '';
  userMessage = '';
  nameTooShort = false;
  messageTooShort = false;

  constructor(public dialog: MatDialog) { }

  onAddMessage() {
    this.nameTooShort = this.userName.length < 3;
    this.messageTooShort = this.userMessage.length === 0;

    if (!this.nameTooShort && !this.messageTooShort) {
      this.dialog.open(MonoDialogComponent, {
        data: {
          userName: this.userName,
          userMessage: this.userMessage
        }
      });
      this.userName = '';
      this.userMessage = '';
    }
  }

   buttonScaleEntable() {
    this.addClassForButton.nativeElement.className = 'animated pulse infinite slow';
   }

   buttonScaleDistable() {
    this.addClassForButton.nativeElement.className = '';
   }
}

