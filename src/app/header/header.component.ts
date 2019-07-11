import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../Services/auth-service';
import {AuthStateService} from '../Services/auth-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public af: AngularFireAuth, public auth: AuthService) { }

  ngOnInit() {
  }

}
