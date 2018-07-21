import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: object;
  private loginUrl = 'http://localhost:12345/Project2/login.do';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    console.log({username, password});
    return this.http.post(this.loginUrl, {username, password});
  }
}
