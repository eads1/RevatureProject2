import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {


  constructor(private client: HttpClient) { }

  getPostInfo(id: number): Observable<string> {
    console.log('PostService');
    const url = 'localhost:12345/Project2/getPostById.do?id=' + id;
    console.log(url);
    return this.client.get(url).pipe(map(resp => resp as string));
  }
}
