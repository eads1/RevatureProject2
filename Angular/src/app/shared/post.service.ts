import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostObject } from '../shared/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private apiURL = 'http://localhost:12345/Project2/';
  constructor(private client: HttpClient) { }
  getAllPostInfo(): Observable<string> {
    const url = this.apiURL + 'getAllPosts.do';
    return this.client.get(url).pipe(map(resp => resp as string));
  }
  getUserPostInfo(uid: number): Observable<string> {
    const url = this.apiURL + 'getUserPostsByUid.do?uid=' + uid;
    return this.client.get(url).pipe(map(resp => resp as string));
  }
  getPostInfo(id: number): Observable<string> {
    const url = this.apiURL + 'getPostById.do?id=' + id;
    return this.client.get(url).pipe(map(resp => resp as string));
  }
  submitPost(email: string, post: string, picDataUrl: string) {
    let newPost: Object;
    if (picDataUrl == null) {
      console.log('here');
      newPost = {
        email: email,
        post: post,
      };
    } else {
      console.log(picDataUrl);
      newPost = {
        email: email,
        post: post,
        imageList: [{
          link: picDataUrl,
        }],
      };
    }
    const url = this.apiURL + 'submitPost.do';
    return this.client.post(url, newPost);
  }
}
