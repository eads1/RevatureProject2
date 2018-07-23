import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor(private _httpServ: HttpClient) { }

  resetPassword(_url: string, _param: string): Observable<string> {
    return this._httpServ.post(_url, _param).pipe(map(resp => resp as string));
  }
}
