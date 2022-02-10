import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: ':id/detail',
    component: UserDetailComponent
  },
  {
    path: 'create',
    component: UserCreateComponent
  },
  {
    path: ':id/update',
    component: UserUpdateComponent
  }
];

@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
