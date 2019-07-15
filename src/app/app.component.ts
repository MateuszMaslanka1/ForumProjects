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

    //  this.showHeader !== true ? this.router.navigate(['/login']) : // ten fragment odpowiada za nawigację po zalogowaniu, dzięki // niemu odrazu po zalgowaiu użytkownik jest przenoszony na stronę głowną aplikacji oprócz tego blokuje dostęp do strony z logowaniem jeśli użytkownik jest zalogowany dodatkowo, w momęcie kiedy przejdziemy na pod stronę np: /all i ją odświerzymy to zostajemy na tej samej pod stronie a nie jesteśmy przenoszeni na główną.
     //   (window.location.pathname !== '/' && window.location.pathname !== '/login')
     //   ? false : this.router.navigate(['']);
    });
  }


}
