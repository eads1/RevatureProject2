import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: number;
  selectedFile: any;
  fname: string;
  lname: string;
  email: string;

  // to display success message
  displaySuccess = false;
  displayError = false;

  _inputFname = '';
  // return the variable automatically each time there's a change
  get inputFname(): string {
    return this._inputFname;
  }
  // set the inputted value automatically into the variable
  set inputFname(temp: string) {
    this._inputFname = temp;
  }
  _inputLname  = '';
  // return the variable automatically each time there's a change
  get inputLname(): string {
    return this._inputLname;
  }
  // set the inputted value automatically into the variable
  set inputLname(temp: string) {
    this._inputLname = temp;
  }
  _inputEmail = '';
  // return the variable automatically each time there's a change
  get inputEmail(): string {
    return this._inputEmail;
  }
  // set the inputted value automatically into the variable
  set inputEmail(temp: string) {
    this._inputEmail = temp;
  }

// default profile_pic if none is provided
  profile_pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  constructor(private user: UserService, private route: ActivatedRoute,
    private router: Router, private cookies: CookieService) {
  }
  /*
    The ngOnInit() gets the values from the Post page or anywhere else that routes to this profile page.
    Below are the parameters that will be grabbed and assigned to the values above to be displayed
    on the html side.

    If possible, we might want to send only the userId and then do a HttpClient request here to get
    the user info. If not, then we'll have to do this manually like this.
  */
  ngOnInit() {
    console.log(this.cookies.get('userId'));
    console.log(this.cookies.get('firstName'));
    console.log(this.cookies.get('lastName'));
    console.log(this.cookies.get('email'));

    this.userId = parseInt(this.cookies.get('userId'), 10);
    this.fname = this.cookies.get('firstName');
    this.lname = this.cookies.get('lastName');
    this.email = this.cookies.get('email');
  }
  /*
    Same function as in RegisterComponent and PostComponent. This just takes the file selected by
    the user and assign it to the 'selectedFile' variable to be passed.
  */
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  /*At the moment, this function isn't implemented yet.
    This function will be triggered when the updateButton is clicked. WHen it is triggered, it
    will grab all of the input values from the html side and check for each value.
    Once the checks are done, then these value will be sent to the middle-end to be send and
    update the database of the respective user
  */
  updateAccount() {
    // console.log('First Name: ' + this._inputFname);
    // console.log('Last Name: ' + this._inputLname);
    // console.log('Email: ' + this._inputEmail);

    const tempFName = this.checkEmpty(this.fname, this._inputFname);
    const tempLname = this.checkEmpty(this.lname, this._inputLname);
    const tempEmail = this.checkEmpty(this.email, this._inputEmail);
    const inputParam = {
      'userId': this.userId,
      'fname': tempFName,
      'lname': tempLname,
      'email': tempEmail,
    };

    /* This function has been s
    */
    this.user.updateAccount(inputParam).subscribe(response => {
      if (response) {
        this.fname = tempFName;
        this.lname = tempLname;
        this.email = tempEmail;
        this.cookies.set('firstName', tempFName);
        this.cookies.set('lastName', tempLname);
        this.cookies.set('email', tempEmail);
        this.displaySuccess = true;
      } else {
        this.displayError = true;
      }
    });
  }

  /*
  --> If the value is empty, return the original value from the variables above.
  --> If the value isn't empty, then replace the original value with the inputted value from
        the user, if it passes any authentications.
  */
  checkEmpty(original_input: string, target_input: string): string {
    if (target_input === '') {
      return original_input;
    } else {
      return target_input;
    }
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
