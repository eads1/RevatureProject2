import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PostObject } from '../shared/post';
import { ChangeEvent } from 'angular2-virtual-scroll';

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
  private viewPortItems: Array<PostObject>;
  constructor(private postService: PostService, private router: Router, private cookies: CookieService) {
    this.userPosts = new Array<PostObject>();
  }

  ngOnInit() {
    this.postService.getAllPostInfo().subscribe((response: any) => {
      this.userPosts = response;
      this.viewPortItems = response;
      console.log( this.userPosts);
    });
  }
  submit() {
    console.log(this.email);
    this.postService.submitPost(this.email, this.post).subscribe(response => {
      if (response['success']) {
        this.ngOnInit();
      } else {
      }
    });
  }
}
