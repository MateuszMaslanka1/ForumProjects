import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllMessageComponent} from './all-message/all-message.component';
import {MainComponent} from './main/main.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthGuardService} from './core/auth-guard.service';
import {AuthService} from './core/auth-service';
import {IsLoginGuardService} from './core/is-login-guard.service';


const routes: Routes = [
  // {path: 'login', component: LoginPageComponent},
  {path: '', component: MainComponent, canActivate: [AuthGuardService]},
  {path: 'all', component: AllMessageComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginPageComponent, canActivate: [IsLoginGuardService]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
