import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "../model/comment";
import {Observable} from "rxjs";
import {CommentDto} from "../model/comment-dto";
const API_URL = 'http://localhost:9005/comments'
@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private httpClient: HttpClient) {
  }

  findAllByTaskId(id: string): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>( API_URL+`/task/` + id );
  }
  create(commentDto: CommentDto ): Observable<CommentDto>{
    return this.httpClient.post<CommentDto>(API_URL,commentDto)
  }

  findAllByReplyId(id: string | null): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>( API_URL+`/reply/` + id );
  }

}
