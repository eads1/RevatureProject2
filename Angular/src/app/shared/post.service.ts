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
    const url = 'localhost:8080/getPostById?id=' + id;
    return this.client.get(url).pipe(map(resp => resp as string));
  }
}
