import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentComponent} from "./comment/comment.component";
import {ReplyCommentComponent} from "./reply-comment/reply-comment.component";

const routes: Routes = [
  {
    path: '',
    component: CommentComponent
  },{
    path: 'comment/:id',
    component: ReplyCommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
