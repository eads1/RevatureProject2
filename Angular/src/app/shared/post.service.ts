import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL } from './URL';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private apiURL = URL;
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
  submitPost(email: string, post: string, picDataUrls: string[]) {
    let newPost: Object;
    if (picDataUrls == null) {
      console.log('here');
      newPost = {
        email: email,
        post: post,
      };
    } else {
      console.log(picDataUrls);
      newPost = {
        email: email,
        post: post,
        imageList: picDataUrls,
      };
    }
    const url = this.apiURL + 'submitPost.do';
    return this.client.post(url, newPost);
  }
}
