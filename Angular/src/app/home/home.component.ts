import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PostObject } from '../shared/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private post: string;
  private email = this.cookies.get('email');
  private uid = this.cookies.get('userId');
  private userPosts: Array<PostObject>;
  constructor(private postService: PostService, private router: Router, private cookies: CookieService) {

  }

  ngOnInit() {
    this.postService.getUserPostInfo(Number(this.uid)).subscribe((response: any) => {
      console.log('2');
      console.log(response);
      this.userPosts = response;
      console.log( this.userPosts);
    });
  }
   submit() {
     console.log(this.email);
    this.postService.submitPost(this.email, this.post).subscribe(response => {
      if (response['success']) {
        console.log(response + ' good');
      } else {
      }
    });
  }
}
