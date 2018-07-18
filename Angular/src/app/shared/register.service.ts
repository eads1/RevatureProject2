import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpServ: HttpClient) { }

  registerAccount(): Observable<string> {
    return this.httpServ.get('register.cs').pipe(map(resp => resp as string));
  }

}
