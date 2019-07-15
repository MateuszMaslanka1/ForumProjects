import {Component, OnInit, HostBinding, ViewChild, ElementRef} from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';
import {AuthService} from '../Services/auth-service';
import {MonoDialogComponent} from '../mono-dialog/mono-dialog.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public auth: AuthService) {
  }
  ngOnInit() { }
}
