import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { CommentData } from '../models/commentdata.class';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private client: HttpClient) { }

  newComment(comment: CommentData) {
    console.log('commentService');
    const userId = '' + comment.user.userId;
    const postId = '' + comment.post;
    const text = comment.text;
    const url = 'http://localhost:12345/Project2/newComment.do';
    console.log(url);
    return this.client.post(url, null, {
      params: {
        userId,
        postId,
        text
      }
    });
  }
}
