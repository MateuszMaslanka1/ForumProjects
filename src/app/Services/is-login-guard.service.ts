import {Injectable} from '@angular/core';
import {AuthService} from './auth-service';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';

@Injectable({
   providedIn: 'root'
 })
 export class IsLoginGuardService {
   constructor(private auth: AuthService, private router: Router, public angularFire: AngularFireAuth) { }

   canActivate(): Observable<boolean> {
     return this.angularFire.authState.pipe(map(auth => {
       console.log(isNullOrUndefined(auth));
       if (isNullOrUndefined(auth) !== true) {
         this.router.navigate(['/']);
         return false;
       } else {
         return true;
       }
     }));
   }
 }
