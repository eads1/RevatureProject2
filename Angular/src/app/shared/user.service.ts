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
  userId = this.cookies.get('userId');
  private _email = this.cookies.get('email');
  firstName = this.cookies.get('firstName');
  lastName = this.cookies.get('lastName');
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

  logout() {
    this.cookies.delete('userId');
    this.cookies.delete('firstName');
    this.cookies.delete('lastName');
    this.cookies.delete('email');
    this.cookies.delete('isLoggedIn');
    this.userId = undefined;
    this.firstName = undefined;
    this.lastName = undefined;
    this._email = undefined;
    this.isLoggedIn = false;
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

  // this function will update the user profile in User Table
  updateAccount(param: Object) {
    const userID = param['userId'];
    const fname = param['fname'];
    const lname = param['lname'];
    const email = param['email'];
    return this.http.post(this.apiUrl + 'updateAccount.do', null, {
      params: {
        userID,
        fname,
        lname,
        email
      },
    });
  }

  resetPassword(inputEmail: string) {
    return this.http.post(this.apiUrl + 'reset.do', null, {
      params: {
        inputEmail
      }
    });
  }
}
