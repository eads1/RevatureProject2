import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { CookieService } from '../../../node_modules/ngx-cookie-service';
import { PostObject } from '../shared/post';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-otherprofile',
  templateUrl: './otherprofile.component.html',
  styleUrls: ['./otherprofile.component.css']
})
export class OtherprofileComponent implements OnInit {
  otherId: string;
  selectedFile: any;
  fname: string;
  lname: string;
  email: string;
  private userPosts: Array<PostObject>;
  private viewPortItems: Array<PostObject>;
//  profile_pic: any;

  // default profile_pic if none is provided
  profile_pic = '../assets/gao_pencil.png';
  constructor(private user: UserService, private postService: PostService, private route: ActivatedRoute,
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
    this.otherId = this.route.snapshot.paramMap.get('userId');
    // getUserInfo
    this.user.getUserInfo(this.otherId).subscribe(response => {
      this.fname = response['fname'];
      this.lname = response['lname'];
      this.email = response['email'];
      this.profile_pic = response['imageid'] ? response['imageid'] : this.profile_pic;
    });

    this.postService.getUserPostInfo(parseInt(this.otherId, 10)).subscribe((response: any) => {
      this.userPosts = response;
      this.viewPortItems = response;
    });

  }
}
