import {Component} from '@angular/core';
import {AuthService} from '../core/auth-service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(public auth: AuthService) {}

}
