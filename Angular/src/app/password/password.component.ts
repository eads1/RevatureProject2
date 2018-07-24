import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  email: string;
  inputEmail: string;

  // to display success message
  displaySuccess = false;
  displayError = false;

  constructor(private userServ: UserService) { }

  ngOnInit() {
  }
  /*
    This function will trigger when the resetButton is clicked. This function will
    grab the inputted value and use that to send an email over to the user. At the
    moment, this function hasn't been properly tested yet.
  */
  resetPassword() {
    this.userServ.resetPassword(this.inputEmail).subscribe(response => {
      if (response) {
        console.log(response);
        this.displaySuccess = true;
        this.displayError = false;
      } else {
        this.displayError = true;
        this.displaySuccess = false;
      }
    });
  }

  displayAlertFunc() {
    if (this.displaySuccess === true) {
      this.displaySuccess = false;
    }
    if (this.displayError === true) {
      this.displayError = false;
    }
  }

}
