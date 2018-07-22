import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../shared/post.service';
import { PostData } from '../models/postdata.class';
import { ImageData } from '../models/imagedata.class';
import { CommentList } from '../shared/commentList.service';
import { CommentObject } from '../shared/comment';
import { LikeService } from './like.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // html specific fields
  likeButtonText = 'Like';

  // actual post info fields
  firstname = 'Bobby';
  lastname = 'Johnson';
  postedDate = 'Yesterday';
  content: string;
  text = 'Here is a test String to visualize text in a post.';
  image_urls: ImageData[] = new Array();
  likes: any;
  likeString: string;
  postId: number;
  userId: number;

  // for comments
  showComment = false;

  // should probably make an interface for comments
  comments: CommentObject[];
  // to display more or not
  limit = 2;

    // for uploaded files
    selectedFile: any;

  constructor(private postService: PostService, private theList: CommentList,
              private likeService: LikeService) {
    console.log('constructing');
    // this method gets the like count
    this.likeService.getPostLikes(9998, 21).subscribe(data => this.likes = data);

    // checks if the user has already liked the post and updates the button accordingly
    this.likeService.hasUserLiked(9998, 21).subscribe(data => {
      if (data === 1) {
        this.likeButtonText = 'Unlike';
      } else {
        this.likeButtonText = 'Like';
      }
    });
    this.comments = theList.getListComments(); // populate list with what's current
    this.postService.getPostInfo(9998).subscribe(
      data => this.populatePost( new PostData(data))
    );
   }

  populatePost(data: PostData) {
    console.log('Populating');
    this.userId = data.user.userId;
    this.postId = data.postId;
    this.firstname = data.user.fname;
    this.lastname = data.user.lname;
    this.text = data.content;
    this.image_urls = data.images;
  }

  ngOnInit() {
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
      this.likeService.incrementPostLikes(this.postId, this.userId).subscribe();
    } else {
      this.likes--;
      this.likeButtonText = 'Like';
      this.likeService.decrementPostLikes(this.postId, this.userId).subscribe();
    }
  }
  /*
    Here we could open the comments section or close it if already open.
    The details need to be discussed.
  */
/*   toggleComments() {
    console.log('comments clicked');
  }*/
  /*
    This function is triggered when the "Comment" button is clicked. This will change
    the value of 'showComment' from true to false, false to true, in order to display
    the comment section underneath the post.
  */
  displayComment() {
    if (this.showComment === true) {
      this.showComment = false;
    } else if (this.showComment === false) {
      this.showComment = true;
    }
  }
  /*
    This function is triggered when the 'loadMoreButton' is clicked, which will increment
    the 'limit' variable by 2.
  */
 incrementLimit() {
   this.limit += 2;
 }
  /*
    This function will be triggered when the uploadButton is pressed, which will trigger the
    hidden input tag, which will grab the file that the user chooses.
  */
  onFileChanged(event) {
  this.selectedFile = event.target.files[0];
  }
  /*
    This function will be triggered when the postButton is pressed, which will commit an
    HTTPClient request to the register service to be added to the database.

    Currently, it is unimplemented.
  */
  addPost() {
  }
}
