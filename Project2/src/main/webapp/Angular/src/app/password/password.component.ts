import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  email: string;
  inputEmail: string;

  // to display success message
  displayMessage = false;

  constructor(private userServ: UserService, private router: Router) { }

  ngOnInit() {
  }
  /*
    This function will trigger when the resetButton is clicked. This function will
    grab the inputted value and use that to send an email over to the user. At the
    moment, this function hasn't been properly tested yet.
  */
  resetPassword() {
    this.displayMessage = false;
    this.userServ.resetPassword(this.inputEmail).subscribe(response => {
      console.log(response);
      if (response['success'] === true) {
        this.router.navigateByUrl('/');
      } else {
        this.displayMessage = true;
      }
    });
  }

  displayAlertFunc() {
    if (this.displayMessage === true) {
      this.displayMessage = false;
    }
  }

}
