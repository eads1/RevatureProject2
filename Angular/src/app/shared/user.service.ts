import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PostObject } from './post';
import { Observable } from '../../../node_modules/rxjs';
import { map } from '../../../node_modules/rxjs/operators';

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

  userId = this.cookies.get('userId');
  private _email = this.cookies.get('email');
  firstName = this.cookies.get('firstName');
  lastName = this.cookies.get('lastName');
  picUrl = this.cookies.get('picUrl');
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


  // this function will update the user profile in User Table (without modifying password)
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

  updateAccount2(param: Object) { // with image
    const userID = param['userId'];
    const fname = param['fname'];
    const lname = param['lname'];
    const email = param['email'];
    const somePic = param['somePic'];
    return this.http.post(this.apiUrl + 'updateAccount3.do', null, {
      params: {
        userID,
        fname,
        lname,
        email,
        somePic
      },
    });
  }

  // this function will update the user profile in User Table (without modifying password)
  updateAccountWithPassword(param: Object) {
    const userID = param['userId'];
    const fname = param['fname'];
    const lname = param['lname'];
    const email = param['email'];
    const password = param['password'];
    return this.http.post(this.apiUrl + 'updateAccount2.do', null, {
      params: {
        userID,
        fname,
        lname,
        email,
        password
      },
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
