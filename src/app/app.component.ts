import {Component, OnInit} from '@angular/core';
import {AuthStateService} from './Services/auth-state.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {isNullOrUndefined} from 'util';
import {Router} from '@angular/router';
import {MonoDialogComponent} from './mono-dialog/mono-dialog.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'work-list';
  showHeader = false;

  constructor(public angularFireAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
    this.angularFireAuth.authState.subscribe( authState => {
      this.showHeader = !isNullOrUndefined(authState);
    });
  }


}
