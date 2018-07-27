import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL } from '../shared/URL';


@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private client: HttpClient) { }

  getPostLikes(postId: number): Observable<string> {
    const params = '?postId=' + postId;
    const url = URL + 'getPostLikesById.do' + params;
    return this.client.get(url).pipe(map(resp => resp as string));
  }

  hasUserLiked(postId: number, userId: number): Observable<number> {
    const params = '?postId=' + postId + '&userId=' + userId;
    const url = URL + 'hasUserLiked.do' + params;
    return this.client.get(url).pipe(map(resp => resp as number));
  }

  incrementPostLikes(postId: number, userId: number): Observable<string> {
    const params = '?postId=' + postId + '&userId=' + userId;
    const url = URL + 'incrementLikesById.do' + params;
    return this.client.get(url).pipe(map(resp => resp as string));
  }

  decrementPostLikes(postId: number, userId: number): Observable<string> {
    const params = '?postId=' + postId + '&userId=' + userId;
    const url = URL + 'decrementLikesById.do' + params;
    return this.client.get(url).pipe(map(resp => resp as string));
  }

}
