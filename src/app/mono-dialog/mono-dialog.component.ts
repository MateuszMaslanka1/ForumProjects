import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {JsonServerService} from '../core/json-server.service';

@Component({
  selector: 'app-mono-dialog',
  templateUrl: './mono-dialog.component.html',
  styleUrls: ['./mono-dialog.component.scss']
})
export class MonoDialogComponent {

  userName = '';
  userMessage = '';

  constructor(
    public dialogRef: MatDialogRef<MonoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service: JsonServerService) {}

  sendToJsonServer() {
    this.service.sendToJson({userName: this.data.userName, userMessage: this.data.userMessage});
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
