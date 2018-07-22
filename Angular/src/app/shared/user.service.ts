import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * This is actually just the email of the currently logged in user.
   */
  private _email = this.cookies.get('email');
  isLoggedIn = this.cookies.check('isLoggedIn');

  private apiUrl = 'http://localhost:12345/Project2/';

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(email: string, password: string) {
    return this.http.post(this.apiUrl + 'login.do', null, {
      params: {
        email,
        password,
      },
    });
  }

  registerAccount(param: Object) {
    const fname = param['fname'];
    const lname = param['lname'];
    const email = param['email'];
    const password = param['password'];
    return this.http.post(this.apiUrl + 'register.do', null, {
      params: {
        fname,
        lname,
        email,
        password
      },
    });
  }

  get email() {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }
}
