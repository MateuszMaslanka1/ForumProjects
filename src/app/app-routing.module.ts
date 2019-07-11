import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllMessageComponent} from './all-message/all-message.component';
import {MainComponent} from './main/main.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthGuardService} from './Services/auth-guard.service';
import {AuthService} from './Services/auth-service';


const routes: Routes = [
  // {path: 'login', component: LoginPageComponent},
  {path: '', component: MainComponent, canActivate: [AuthGuardService]},
  {path: 'all', component: AllMessageComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginPageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
