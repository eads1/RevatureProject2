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
      if (response['success']) {
        this.user.email = this.email;
        this.user.isLoggedIn = true;
        this.cookies.set('email', this.email);
        this.cookies.set('isLoggedIn', 'true');
        this.router.navigate(['/']);
      } else {
        console.log(response);
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
