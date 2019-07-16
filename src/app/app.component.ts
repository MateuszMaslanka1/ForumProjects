import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {isNullOrUndefined} from 'util';
import {Router} from '@angular/router';


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
