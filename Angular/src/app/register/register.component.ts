import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private firstname: string;
  private lastname: string;
  private email: string;
  private password: string;
  selectedFile: File;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  createAccount() {
    const firstname = document.getElementById('fname');
    const lastname = document.getElementById('lname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const profile = this.selectedFile;
    const newUser = {
      fname: this.firstname,
      lname: this.lastname,
      email: this.email,
      password: this.password,
      profilePic: profile
    };

    this.userService.registerAccount(newUser).subscribe(response => {
      const json = JSON.parse(response);
      if (json.success === true) {
        this.router.navigate(['/']);
      }
    });
  }

}
