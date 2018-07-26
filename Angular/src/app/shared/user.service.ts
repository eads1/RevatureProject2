import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from '../../../node_modules/rxjs';
import { map } from '../../../node_modules/rxjs/operators';
import { URL } from './URL';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  get email() {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

  userId = parseInt(this.cookies.get('userId'), 10);
  private _email = this.cookies.get('email');
  firstName = this.cookies.get('firstName');
  lastName = this.cookies.get('lastName');
  picUrl = this.cookies.get('picUrl');
  isLoggedIn = this.cookies.check('isLoggedIn');

  private apiUrl = URL;

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(email: string, password: string) {
    return this.http.post(this.apiUrl + 'login.do', null, {
      params: {
        email,
        password,
      },
    });
  }

  /**
   * Sets the logged in user to be the user described by the parameter.
   *
   * @param user The user that should be logged in.
   */
  setLoggedIn(user) {
    this.userId = user.userId;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.picUrl = user.picUrl;
    this.isLoggedIn = true;
    this.cookies.set('userId', user.userId);
    this.cookies.set('email', user.email);
    this.cookies.set('firstName', user.firstName);
    this.cookies.set('lastName', user.lastName);
    this.cookies.set('picUrl', user.picUrl);
    this.cookies.set('isLoggedIn', 'true');
  }

  logout() {
    this.cookies.delete('userId');
    this.cookies.delete('firstName');
    this.cookies.delete('lastName');
    this.cookies.delete('email');
    this.cookies.delete('picUrl');
    this.cookies.delete('isLoggedIn');
    this.userId = undefined;
    this.firstName = undefined;
    this.lastName = undefined;
    this._email = undefined;
    this.picUrl = undefined;
    this.isLoggedIn = false;
  }

  registerAccount(param: Object) {
    return this.http.post(this.apiUrl + 'register.do', param);
  }


  // this function will update the user profile in User Table
  updateAccount(userObj: object, password: string) {
    return this.http.post(this.apiUrl + 'updateAccount.do', userObj, {
      params: { password },
    });
  }

  updateAccountWithPassword2(param: Object) { // with image
    const userID = param['userId'];
    const fname = param['fname'];
    const lname = param['lname'];
    const email = param['email'];
    const password = param['password'];
    const somePic = param['somePic'];
    return this.http.post(this.apiUrl + 'updateAccount4.do', null, {
      params: {
        userID,
        fname,
        lname,
        email,
        password,
        somePic
      },
    });
  }

  searchUser(searchText: string): Observable<string> {
    const url = this.apiUrl + 'search.do?search-text=' + searchText;
    return this.http.get(url).pipe(map(resp => resp as string));
  }

  resetPassword(inputEmail: string) {
    return this.http.post(this.apiUrl + 'reset.do', null, {
      params: {
        inputEmail
      }
    });
  }

  getUserInfo(someID: string) {
    return this.http.post(this.apiUrl + 'getUser.do', null, {
      params: {
        someID
      }
    });
  }
}
