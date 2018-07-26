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
      console.log('login response');
      console.log(response);
      if (response) {
        console.log(response);
        const user = {
          userId: response['userId'],
          firstName: response['fname'],
          lastName: response['lname'],
          email: response['email'],
          picUrl: response['imageid'],
        };
        this.user.setLoggedIn(user);
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
