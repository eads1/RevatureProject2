import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private apiURL = 'http://localhost:12345/Project2/';
  constructor(private client: HttpClient) { }
  getUserPostInfo(email: string): Observable<string> {
    const url = this.apiURL + 'getUserPostsByEmail.do?email=' + email;
    return this.client.get(url).pipe(map(resp => resp as string));
  }
  getPostInfo(id: number): Observable<string> {
    const url = this.apiURL + 'getPostById.do?id=' + id;
    return this.client.get(url).pipe(map(resp => resp as string));
  }
  submitPost(email: string, post: string) {
    const url = this.apiURL + 'submitPost.do';
    return this.client.post(url, null, {
      params: {
        email,
        post
      },
    });
  }
}
