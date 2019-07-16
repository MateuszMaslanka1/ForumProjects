import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {MainComponent} from './core/main/main.component';
import {InputTextareaComponent} from './core/text/input-textarea.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import {AllMessageComponent} from './core/all-message/all-message.component';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {LoginComponent} from './core/authentication/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MonoDialogComponent} from './core/mono-dialog/mono-dialog.component';

export const firebaseConfig = environment.firebase;


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    InputTextareaComponent,
    AllMessageComponent,
    LoginComponent,
    MonoDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [ ],
  entryComponents: [
    MonoDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
