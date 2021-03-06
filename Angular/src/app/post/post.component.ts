import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../shared/post.service';
import { PostData } from '../models/postdata.class';
import { ImageData } from '../models/imagedata.class';
import { CommentList } from '../shared/commentList.service';
import { CommentObject } from '../shared/comment';
import { LikeService } from './like.service';
import { CookieService } from 'ngx-cookie-service';
import { CommentData } from '../models/commentdata.class';
import { CommentService } from '../shared/comment.service';
import { UserData } from '../models/userdata.class';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private _userPost: Array<Object>;
  // html specific fields
  likeButtonText = 'Like';
  // current user details
  userId = parseInt(this.cookies.get('userId'), 10);
  fname = this.cookies.get('firstName');
  lname = this.cookies.get('lastName');
  private email = this.cookies.get('email');

  // actual post info fields --> this will eventually be replaced with an actual
  //                              user module

  firstname: string;
  lastname: string;
  postedDate = 'Yesterday';
  content: string;
  text = 'Here is a test String to visualize text in a post.';
  image_urls: ImageData[] = new Array();
  likes: any;
  likeString: string;
  postId: number;
  ownerId: number;
  ownerEmail: string;
  currPic = 0;

  // for comments
  showComment = false;
  commentText: string;

  // to display more or not
  limit = 2;

  // for uploaded files
  selectedFile: any;

  // should probably make an interface for comments
  comments: CommentData[];

  @Input()
  set userPost(userPost: Array<Object>) {
    this._userPost = userPost;
  }

  get userPost() {
    return this._userPost;
  }

  constructor(private postService: PostService, private likeService: LikeService,
              private cookies: CookieService, private commentService: CommentService) {
   }

  ngOnInit() {
    // automatically set cookie of ownerId to -1 upon loading
    this.cookies.set('ownerId', '-1');
    const post = new PostData(this._userPost);
    this.populatePost(post);
    this.likeService.getPostLikes(post.postId).subscribe(data => this.likes = data);
    this.comments = post.comments;

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
    this.ownerId = data.user.userId;
    this.postId = data.postId;
    this.firstname = data.user.fname;
    this.lastname = data.user.lname;
    this.ownerEmail = data.user.email;
    this.text = data.content;
    this.image_urls = data.images;
    const d = new Date(data.postedDate);
    this.postedDate = d.toLocaleDateString();
  }

  nextImage() {
    if (this.currPic < this.image_urls.length - 1) {
      this.currPic++;
    } else {
      this.currPic = 0;
    }
  }

prevImage() {
  if (this.currPic > 0) {
    this.currPic--;
  } else {
    this.currPic = this.image_urls.length - 1;
  }
}


  /*
    toggleLike() is triggered when ever the like button is clicked. It toggles the text and updates the counter.
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
    This function is triggered when the 'loadMoreButton' is clicked, which will multiply
    the 'limit' variable by 2.
    It now only changes when more comments are available.
  */
 incrementLimit() {
   if (this.limit <= this.comments.length) {
    this.limit *= 2;
  }

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

  isCurrentUser(email: string): boolean {
    return this.email === email;
  }

  // adds comment to the existing array and sets it up in the database
  addComment() {
    if (!this.commentText) {
      return;
    }
    const user = new UserData(this.userId, this.fname, this.lname, '', '', this.email);
    const comment = new CommentData(0, this.postId, user, this.commentText);
    // this line updates the id of the new comment to match its persistent copy
    // this allows a brand new comment to be deleted
    this.commentService.newComment(comment).subscribe( data => comment.commentId = data);
    this.comments.push(comment);
    this.commentText = '';
  }

  deleteComment(comment: CommentData) {
    if (comment.commentId === 0) {

    }
    this.commentService.deleteComment(comment).subscribe();
    const index = this.comments.indexOf(comment);
    if (index !== -1 ) {
      this.comments.splice(index, 1);
    }
  }
}
