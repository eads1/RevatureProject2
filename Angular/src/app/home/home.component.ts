import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private post: string;
  private email = this.cookies.get('email');
  constructor(private user: UserService, private postService: PostService, private router: Router, private cookies: CookieService) {
    console.log(user.isLoggedIn);
    console.log(user.email);
  }

  ngOnInit() {
  }
   submit() {
    this.postService.submitPost(this.email, this.post).subscribe(response => {
      //console.log(response);
      if (response['success']) {
        console.log(response + ' good');
      } else {
       // console.log(response);
      }
    });
  }
}
