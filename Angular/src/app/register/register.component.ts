import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../shared/register.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
import { first } from '../../../node_modules/rxjs/operators';

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
    const firstname: HTMLInputElement = <HTMLInputElement> document.getElementById('fname');
    const lastname: HTMLInputElement = <HTMLInputElement> document.getElementById('lname');
    const email: HTMLInputElement = <HTMLInputElement>  document.getElementById('email');
    const password: HTMLInputElement = <HTMLInputElement>  document.getElementById('password');
    const profile = this.selectedFile;
    console.log(firstname.value);
    const newUser = {
      fname: firstname,
      lname: lastname,
      email: email,
      profilePic: profile
    };

    this._reg.registerAccount('register.do', newUser).subscribe(res => console.log(res));
  }

}
