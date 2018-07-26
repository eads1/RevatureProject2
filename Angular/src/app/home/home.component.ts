import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('openModal') openModal: ElementRef;
  firstTime: string;

  private post: string;
  private email = this.cookies.get('email');
  private uid = this.cookies.get('userId');
  private userPosts: Array<PostObject>;
  private viewPortItems: Array<PostObject>;

  private files: Array<File> = new Array<File>();
  private picDataUrl: Array<string> = new Array<string>();
  private imageChanged = false;
  constructor(private postService: PostService, private router: Router, private cookies: CookieService) {
    this.userPosts = new Array<PostObject>();
  }

  ngOnInit() {
    console.log('success!');
    this.firstTime = this.cookies.get('firstTime');
    if (this.firstTime === 'true') {
      this.openModal.nativeElement.click();
      this.cookies.set('firstTime', 'false');
    }

    this.post = '';
    this.postService.getAllPostInfo().subscribe((response: any) => {
      this.userPosts = response;
      this.viewPortItems = response;
      console.log( this.userPosts);
    });
  }
  submit() {

    this.postService.submitPost(this.email, this.post, this.picDataUrl).subscribe(response => {
      if (response['success']) {
        this.ngOnInit();
      } else {
      }
    });
  }

  onFileChanged(event) {
    console.log('test');
    this.imageChanged = true;
    this.files = event.target.files;
    const reader = new FileReader();
    for (let i = 0; i < this.files.length; i++) {
      reader.onload = () => {
        this.picDataUrl.push(reader.result);
      };
      reader.readAsDataURL(this.files[i]);
    }
  }
}
