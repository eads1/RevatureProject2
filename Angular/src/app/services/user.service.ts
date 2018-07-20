import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: object;
  private loginUrl = '';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(this.loginUrl, {username, password});
  }
}
