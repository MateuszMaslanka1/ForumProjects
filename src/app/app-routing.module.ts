import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllMessageComponent} from './core/all-message/all-message.component';
import {MainComponent} from './core/main/main.component';
import {LoginComponent} from './core/authentication/login/login.component';
import {AuthGuardService} from './core/authentication/guards/auth-guard.service';
import {LoginGuardService} from './core/authentication/guards/login-guard.service';


const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [AuthGuardService]},
  {path: 'all', component: AllMessageComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuardService]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
