import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  user = {};

  // html specific fields
  likeButtonText = 'Like';

  // actual post info fields
  firstname = 'Bobby';
  lastname = 'Johnson';
  postedDate = 'Yesterday';
  content: string;
  text = 'Here is a test String to visualize text in a post.';
  likes = 11;
  // should probably make an interface for comments
  comments: Comment[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    console.log('post constructor');
    this.postService.getPostInfo(9998).subscribe(
      data => this.populatePost(data)
    );

  }

  populatePost(data) {
    console.log('Data: ' + data);

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
