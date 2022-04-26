import { Component, OnInit } from '@angular/core';
import {CommentServiceService} from "../service/comment-service.service";
import {Comment} from "../model/comment";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reply-comment',
  templateUrl: './reply-comment.component.html',
  styleUrls: ['./reply-comment.component.css']
})
export class ReplyCommentComponent implements OnInit {
  page =1 ;
  comments: Comment[] = [];
  constructor(private commentService: CommentServiceService, private activatedRoute: ActivatedRoute) { }

  commentFormGroup: FormGroup = new FormGroup({
    userId: new FormControl(),
    taskId: new FormControl(),
    replyId: new FormControl(),
    content: new FormControl(),
  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      console.log(id);
      this.commentService.findAllByReplyId(id).subscribe(comments => {
        this.comments = comments;
        console.log(comments);
      })
    })

  }

  create() {
    const comment = {
      userId: 1,
      taskId: 1,
      replyId: 0,
      content: this.commentFormGroup.value.content
    }
    console.log(comment);
    this.commentService.create(comment).subscribe(abc => {
    });
    location.reload();
  }
}
