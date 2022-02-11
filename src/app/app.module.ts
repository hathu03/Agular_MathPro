import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {AppRoutingModule} from './app-routing.module';
import {MasterComponent} from './master/master.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NewfeedComponent} from './newfeed/newfeed.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MasterComponent,
    LoginComponent,
    NewfeedComponent,
    NotFoundComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
