import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { UpdateaccountService } from '../shared/updateaccount.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  selectedFile: any;
  fname: string;
  lname: string;
  email: string;
  password = 'JesusIsAFriendOfMine';

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
  _inputPassword = '';  // return the variable automatically each time there's a change
  get inputPassword(): string {
    return this._inputPassword;
  }
  // set the inputted value automatically into the variable
  set inputPassword(temp: string) {
    this._inputPassword = temp;
  }

//  for demo purposes
//  profile_pic = 'http://images6.fanpop.com/image/photos/38500000/Takeo-the-handsome-my-love-story-ore-monogatari-38582718-500-280.jpg';

// default profile_pic if none is provided
  profile_pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  constructor(private route: ActivatedRoute, private updater: UpdateaccountService) {
  }
  /*
    This function gets the values from the Post page or anywhere else that routes to this profile page.
    Below are the parameters that will be grabbed and assigned to the values above to be displayed
    on the html side.

    The only thing missing here is the password.

    If possible, we might want to send only the userId and then do a HttpClient request here to get
    the user info. If not, then we'll have to do this manually like this.
  */
  ngOnInit() {
    this.fname = this.route.snapshot.paramMap.get('fname');
    this.lname = this.route.snapshot.paramMap.get('lname');
    this.email = this.route.snapshot.paramMap.get('email');
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
      --> If the value is null, use the original value from the variables above.
      --> If the value isn't null, then replace the original value with the inputted value from
            the user, if it passes any authentications.
    Once the checks are done, then these value will be sent to the middle-end to be send and
    update the database of the respective user based on their user_id.
  */
  updateAccount() {
    console.log('First Name: ' + this._inputFname);
    console.log('Password: ' + this._inputPassword);
    console.log('Last Name: ' + this._inputLname);
    console.log('Email: ' + this._inputEmail);

    const tempFName = this.checkEmpty(this.fname, this._inputFname);
    const tempLname = this.checkEmpty(this.lname, this._inputLname);
    const tempEmail = this.checkEmpty(this.email, this._inputEmail);
    const tempPassword = this.checkEmpty(this.password, this._inputPassword);
    const inputParam = {
      'fname': tempFName,
      'lname': tempLname,
      'email': tempEmail,
      'password': tempPassword
    };

    /* this is only a placeholder at the moment since the particular parts of
        sending it to the middle-end is unclear to me yet.
    */
    this.updater.updateAccount('updateAccount.do', inputParam).subscribe(res => console.log(res));
  }

  checkEmpty(original_input: string, target_input: string): string {
    if (target_input === '') {
      return original_input;
    } else {
      return target_input;
    }
  }
}
