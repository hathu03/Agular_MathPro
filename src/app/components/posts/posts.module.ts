import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostListComponent} from "./post-list/post-list.component";
import { PostCreateComponent } from './post-create/post-create.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { PostDetailComponent } from './post-detail/post-detail.component';



@NgModule({
  declarations: [
    PostListComponent,
    PostCreateComponent,
    PostUpdateComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
