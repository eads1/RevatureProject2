import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
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
  private selectedFile: File;
  private loading = false;
  private success = true;

  private picDataUrl: string;


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.picDataUrl = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  createAccount() {
    const newUser = {
      fname: this.firstname,
      lname: this.lastname,
      email: this.email,
      password: this.password,
      imageid: this.picDataUrl,
    };

    this.loading = true;

    this.userService.registerAccount(newUser).subscribe(response => {
      if (response['success']) {
        this.success = true;
        this.router.navigate(['/']);
      } else {
        this.success = false;
      }
      this.loading = false;
    });
  }

}
