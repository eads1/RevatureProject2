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
  private uploadedPic = false;
  private loading = false;

  // to display success message
  displaySuccess = false;
  displayError = false;

  _inputFname = '';
  _inputLname = '';
  _inputEmail = '';
  _inputPassword = '';

  // default profile_pic if none is provided
  // profile_pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  profile_pic = 'assets/gao_pencil.png';

  picDataUrl: string;
  currentPassword: string;


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
    this.userId = this.user.userId;
    this.fname = this.user.firstName;
    this.lname = this.user.lastName;
    this.email = this.user.email;
    // this.profile_pic = this.user.picUrl;
    this.profile_pic = this.user.picUrl ? this.user.picUrl : this.profile_pic;
  }
  /*
    Same function as in RegisterComponent and PostComponent. This just takes the file selected by
    the user and assign it to the 'selectedFile' variable to be passed.
  */
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    const reader = new FileReader();

    reader.onload = () => {
      this.picDataUrl = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
    this.uploadedPic = true;
  }

  /*
    This function will be triggered when the updateButton is clicked. WHen it is triggered, it
    will grab all of the input values from the html side and check for each value.
    Once the checks are done, then these value will be sent to the middle-end to be send and
    update the database of the respective user
  */
  updateAccount() {

    const userObj = {
      userId: this.userId,
      fname: this._inputFname ? this._inputFname : null,
      lname: this._inputLname ? this._inputLname : null,
      email: this._inputEmail ? this._inputEmail : null,
      password: this._inputPassword ? this._inputPassword : null,
      imageid: this.picDataUrl ? this.picDataUrl : null
    };

    this.loading = true;

    this.user.updateAccount(userObj, this.currentPassword).subscribe(response => {
      console.log(response);
      if (response && (response['email'] != null)) {
        const user = {
          userId: response['userId'] ? response['userId'] : this.userId,
          firstName: response['fname'] ? response['fname'] : this.fname,
          lastName: response['lname'] ? response['lname'] : this.lname,
          email: response['email'] ? response['email'] : this.email,
          picUrl: response['imageid'] ? response['imageid'] : this.profile_pic,
        };


        this._inputFname = '';
        this._inputLname = '';
        this._inputEmail = '';
        this._inputPassword = '';
        this.profile_pic = response['imageid'] ? response['imageid'] : this.profile_pic;
        this.picDataUrl = undefined;

        this.user.setLoggedIn(user);
        this.displaySuccess = true;
      } else {
        this.displayError = true;
      }

      this.loading = false;
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
