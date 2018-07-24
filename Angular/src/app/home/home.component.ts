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
  private loading: boolean;
  constructor(private postService: PostService, private router: Router, private cookies: CookieService) {
    this.userPosts = new Array<PostObject>();
  }

  ngOnInit() {
     this.postService.getAllPostInfo().subscribe((response: any) => {
      console.log('2');
      console.log(response);
      this.userPosts = response;
      this.viewPortItems = response;
      console.log( this.userPosts);
    });
  }
  submit() {
    console.log(this.email);
    this.postService.submitPost(this.email, this.post).subscribe(response => {
      if (response['success']) {
        console.log(response + ' good');
        this.ngOnInit();
      } else {
      }
    });
  }
  fetch(event: ChangeEvent) {
    console.log('Fetching');
    if (event.end !== this.userPosts.length - 1) {
      return;
    }
    this.loading = true;
    this.postService.fetchNextChunk(this.userPosts.length, 5).then(chunk => {
      console.log(chunk);
      this.userPosts = this.userPosts.concat(chunk);
      this.loading = false;
  }, () => this.loading = false);
  }
}
