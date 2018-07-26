import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { CommentData } from '../models/commentdata.class';
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private client: HttpClient) { }

  newComment(comment: CommentData) {
    const userId = '' + comment.user.userId;
    const postId = '' + comment.post;
    const text = comment.text;
    const url = 'http://localhost:12345/Project2/newComment.do';
    return this.client.post(url, null, {
      params: {
        userId,
        postId,
        text
      }
    }).pipe(map(resp => resp as number));
  }

  deleteComment(comment: CommentData) {
    const commentId = comment.commentId + '';
    const url = 'http://localhost:12345/Project2/deleteComment.do?commentId=' + commentId;
    return this.client.get(url);
  }
}
