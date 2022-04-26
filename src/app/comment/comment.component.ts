import {Component, OnInit} from '@angular/core';
import {CommentServiceService} from "../service/comment-service.service";
import {Comment} from "../model/comment";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [];
  page = 1;

  constructor(private commentService: CommentServiceService) {
  }

  commentFormGroup: FormGroup = new FormGroup({
    userId: new FormControl(),
    taskId: new FormControl(),
    replyId: new FormControl(),
    content: new FormControl(),
  });

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.commentService.findAllByTaskId("1").subscribe(comments => {
      this.comments = comments;
      console.log(comments);
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
