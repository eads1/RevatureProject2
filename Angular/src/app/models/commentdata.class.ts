import { PostData } from './postdata.class';
import { UserData } from './userdata.class';

export class CommentData {
    commentId: number;
    post: number;
    user: UserData;
    text: string;

    constructor(commentId: number, post: number, user: UserData, text: string) {
        this.commentId = commentId;
        this.post = post;
        this.user = user;
        this.text = text;
    }
}
