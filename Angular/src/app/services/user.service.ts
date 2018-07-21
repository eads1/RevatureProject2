import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: object;
  private loginUrl = 'http://ec2-54-234-210-208.compute-1.amazonaws.com:12345/Project2/login.do';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    console.log({email, password});
    return this.http.post(this.loginUrl, {email, password});
  }
}
