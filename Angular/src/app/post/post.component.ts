import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../shared/post.service';
import { PostData } from '../models/postdata.class';
import { ImageData } from '../models/imagedata.class';
import { CommentList } from '../shared/commentList.service';
import { CommentObject } from '../shared/comment';
import { LikeService } from './like.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private _userPost: Array<Object>;
  // html specific fields
  likeButtonText = 'Like';

  // actual post info fields --> this will eventually be replaced with an actual
  //                              user module

  firstname = 'Bobby';
  lastname = 'Johnson';
  postedDate = 'Yesterday';
  email = 'bobby.johnson@getReck.com';
  content: string;
  text = 'Here is a test String to visualize text in a post.';
  image_urls: ImageData[] = new Array();
  likes: any;
  likeString: string;
  postId: number;
  ownerId: number;
  userId = parseInt(this.cookies.get('userId'), 10);

  // for comments
  showComment = false;

  // to display more or not
  limit = 2;

  // for uploaded files
  selectedFile: any;

  // should probably make an interface for comments
  comments: CommentObject[];

  @Input()
  set userPost(userPost: Array<Object>) {
    this._userPost = userPost;
  }

  get userPost() {
    return this._userPost;
  }

  constructor(private postService: PostService, private theList: CommentList,
              private likeService: LikeService, private cookies: CookieService) {
     // populate list with what's current
    // this.postService.getPostInfo(9998).subscribe(
    //   data => this.populatePost( new PostData(data))
    // );
   }

  ngOnInit() {
    console.log('here');
    console.log(this._userPost);
    const post = new PostData(this._userPost);
    this.populatePost(post);
    this.likeService.getPostLikes(post.postId).subscribe(data => this.likes = data);
    this.comments = this.theList.getListComments();

    // checks if the user has already liked the post and updates the button accordingly
    this.likeService.hasUserLiked(post.postId, this.userId).subscribe(data => {
      if (data === 1) {
        this.likeButtonText = 'Unlike';
      } else {
        this.likeButtonText = 'Like';
      }
    });
  }

  populatePost(data: PostData) {
    console.log('Populating');
    this.ownerId = data.user.userId;
    this.postId = data.postId;
    this.firstname = data.user.fname;
    this.lastname = data.user.lname;
    this.text = data.content;
    this.image_urls = data.images;
  }

  /*
  visitProfile() is triggered when the user clicks on a post owner name.
  As of July 18th, it does not have backend functionality.
  --> As of July 21st, this funciton shouldn't be needed since a routerLink
    in the html page should be enough to redirect the user from this page
    to the user's profile page
  */
/*   visitProfile() {
    console.log('visiting ' + this.firstname + '\'s profile page');
  } */

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
