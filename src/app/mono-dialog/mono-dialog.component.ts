import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {JsonServerService} from '../Services/json-server.service';

@Component({
  selector: 'app-mono-dialog',
  templateUrl: './mono-dialog.component.html',
  styleUrls: ['./mono-dialog.component.scss']
})
export class MonoDialogComponent {

  nameTooShort = false;
  messageTooShort = false;
  userName = '';
  userMessage = '';

  constructor(
    public dialogRef: MatDialogRef<MonoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service: JsonServerService) {

    console.log(this.data.userName);
  }

  sendToJson() {
    this.service.sendToJson({userName: this.data.userName, userMessage: this.data.userMessage});
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
