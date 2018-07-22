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
    const url = 'http://localhost:12345/Project2/getPostById.do?id=' + id;
    return this.client.get(url).pipe(map(resp => resp as string));
  }
}
