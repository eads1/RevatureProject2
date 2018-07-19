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

  ccreateAccount() {
    const firstname = document.getElementById('fname');
    const lastname = document.getElementById('lname');
    const email = document.getElementById('email');
    const profile = this.selectedFile;

    const newUser = {
      fname: firstname,
      lname: lastname,
      userEmail: email,
      profilePic: profile
    };

    this._reg.registerAccount('register.cs', newUser).subscribe(res => console.log(res));
  }

}
