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

  constructor(private auth: AuthService, private router: Router, public af: AngularFireAuth) { }

   // canActivate(next: ActivatedRouteSnapshot,
   //             state: RouterStateSnapshot): Observable<boolean> | boolean {
   //            return this.auth.user
   //               .pipe(take(1))
   //               .pipe(map(user => !!user))
   //               .pipe(tap(loggedIn => {
   //                 if (!loggedIn){
   //                   console.log(this.af.authState)
   //                   this.router.navigate(['']);
   //                 }
   //               }) );
   // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.af.authState.pipe(map(auth => {
      //console.log(auth);
      if (isNullOrUndefined(auth)) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }));
  }
}
