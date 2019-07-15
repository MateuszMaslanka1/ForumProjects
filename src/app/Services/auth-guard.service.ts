import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs";
import {AuthService} from "./auth-service";
import {map, take, tap} from "rxjs/operators";
import {auth} from 'firebase';
import {AngularFireAuth} from "@angular/fire/auth";
import {UserLoggin} from '../model/UserLoggin';
import {isNullOrUndefined} from 'util';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router, public angularFire: AngularFireAuth) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.angularFire.authState.pipe(map(auth => {
      if (isNullOrUndefined(auth)) {
      //  console.log(isNullOrUndefined(auth));
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }));
  }
}
