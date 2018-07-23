import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  email: string;
  _inputEmail = '';
  // return the variable automatically each time there's a change
  get inputEmail(): string {
    return this._inputEmail;
  }
  // set the inputted value automatically into the variable
  set inputEmail(temp: string) {
    this._inputEmail = temp;
  }

  constructor() { }

  ngOnInit() {
  }
  /*
    This function will trigger when the resetButton is clicked. This function will
    grab the inputted value and use that to send an email over to the user. At the
    moment, this function hasn't been properly tested yet.
  */
  resetPassword(temp: any) {
    // console.log(this._inputEmail);
  }

}
