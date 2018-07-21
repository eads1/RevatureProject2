import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../shared/post.service';
import { PostData } from '../models/postdata.class';
import { ImageData } from '../models/imagedata.class';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  user = {};

  @Input()


  active: string;

  Arr = Array; // Array type captured in a variable
  num: number;

  // html specific fields
  likeButtonText = 'Like';

  // actual post info fields
  firstname = 'Bobby';
  lastname = 'Johnson';
  postedDate = 'Yesterday';
  content: string;
  text = 'Here is a test String to visualize text in a post.';
  image_urls: ImageData[] = new Array();
  likes = 11;
  // should probably make an interface for comments
  comments: Comment[];

  constructor(private postService: PostService) {
    this.postService.getPostInfo(9998).subscribe(
      data => this.populatePost( new PostData(data))
    );
   }

  ngOnInit() {

  }

  ngUpdated(index: number) {
    if (index === 0) {
      this.active = 'item active';
    } else {
      this.active = 'item';
    }
  }

  populatePost(data: PostData) {
    console.log(data);
    this.firstname = data.user.getFname();
    this.lastname = data.user.lname;
    this.text = data.content;
    this.image_urls = data.images;
    this.num = data.images.length;
  }

  /*
  visitProfile() is triggered when the user clicks on a post owner name.
  As of July 18th, it does not have backend functionality.
  */
  visitProfile() {
    console.log('visiting ' + this.firstname + '\'s profile page');
  }

  /*
    toggleLike() is triggered when ever the like button is clicked. It toggles the text and updates the counter.
    As of July 18th, it does not have backend functionality.
  */
  toggleLike() {
    if (this.likeButtonText === 'Like') {
      this.likes++;
      this.likeButtonText = 'Unlike';
    } else {
      this.likes--;
      this.likeButtonText = 'Like';
    }
    // this is where the servlet logic will go
  }

  /*
    Here we could open the comments section or close it if already open.
    The details need to be discussed.
  */
  toggleComments() {
    console.log('comments clicked');
  }

}
