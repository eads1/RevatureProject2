import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: object;
  private loginUrl = 'http://ec2-54-234-210-208.compute-1.amazonaws.com:12345/Project2/login.do';
  private registerUrl = 'http://ec2-54-234-210-208.compute-1.amazonaws.com:12345/Project2/register.do';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(this.loginUrl, null, {
      params: {
        email,
        password,
      },
      responseType: 'text',
    });
  }
  registerAccount(param: Object) {
    const fname = param['fname'];
    const lname = param['lname'];
    const email = param['email'];
    const password = param['password'];
    return this.http.post(this.registerUrl, null, {
      params: {
        fname,
        lname,
        email,
        password
      },
      responseType: 'text',
    });
  }
}
