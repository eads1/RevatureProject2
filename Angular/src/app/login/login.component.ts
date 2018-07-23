import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email: string;
  private password: string;
  private failed = false;
  private labelStyles;

  constructor(private user: UserService, private router: Router, private cookies: CookieService) { }

  ngOnInit() {
  }

  submit() {
    this.user.login(this.email, this.password).subscribe(response => {
      if (response) {
        this.user.userId = response['userId'];
        this.user.firstName = response['firstName'];
        this.user.lastName = response['lastName'];
        this.user.email = response['email'];
        this.user.isLoggedIn = true;
        this.cookies.set('userId', response['userId']);
        this.cookies.set('firstName', response['firstName']);
        this.cookies.set('lastName', response['lastName']);
        this.cookies.set('email', response['email']);
        this.cookies.set('isLoggedIn', 'true');
      } else {
        this.failed = true;
        this.labelStyles = { 'color': 'red' };
      }
    });
  }

  changed() {
    this.failed = false;
    this.labelStyles = { 'color': 'grey' };
  }
}
