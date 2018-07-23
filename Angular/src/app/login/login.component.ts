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
        this.user.email = this.email;
        this.user.userId = response['userId'];
        this.user.isLoggedIn = true;
        this.cookies.set('email', this.email);
        this.cookies.set('isLoggedIn', 'true');
        this.cookies.set('userId', response['userId']);
        this.router.navigate(['/post']); // temporary location until 'home' is build
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
