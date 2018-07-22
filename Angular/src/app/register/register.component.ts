import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../shared/register.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  selectedFile: File;
  constructor(private _router: Router, private _reg: RegisterService) { }

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
    // console.log(firstname.value);
    const newUser = {
      fname: firstname,
      lname: lastname,
      userEmail: email,
      userPassword: password,
      profilePic: profile
    };

    this._reg.registerAccount('register.do', newUser).subscribe(res => console.log(res));
  }

}
