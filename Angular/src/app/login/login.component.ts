import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email: string;
  private password: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  submit() {
    this.userService.login(this.email, this.password).subscribe(response => {
      console.log(response);
    });
  }
}
