import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LikeServiceService {

  constructor(private client: HttpClient) { }

  getPostLikes(postId: number): Observable<string> {
    const url = 'http://localhost:12345/Project2/getPostLikesById.do?postId=' + postId;
    return this.client.get(url).pipe(map(resp => resp as string));
  }

  incrementPostLikes(postId: number, userId: number): Observable<string> {
    const params = '?postId=' + postId + '&userId=' + userId;
    const url = 'http://localhost:12345/Project2/incrementLikesById.do' + params;
    return this.client.get(url).pipe(map(resp => resp as string));
  }

  decrementPostLikes(postId: number, userId: number): Observable<string> {
    const params = '?postId=' + postId + '&userId=' + userId;
    const url = 'http://localhost:12345/Project2/decrementLikesById.do' + params;
    return this.client.get(url).pipe(map(resp => resp as string));
  }

}
