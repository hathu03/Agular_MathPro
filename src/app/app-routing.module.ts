import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {MasterComponent} from "./master/master.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {NewfeedComponent} from "./newfeed/newfeed.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'',
        component:NewfeedComponent
      },
      {
        path: 'users',
        component: MasterComponent,
        loadChildren: ()=>import('./components/users/users.module').then(m=>m.UsersModule)
      },
      {
        path:'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
