import { UserData } from './userdata.class';
import { CommentData } from './commentdata.class';
import { ImageData } from './imagedata.class';

/*
    This class exists solely to persist data after the observable moves on.
*/
export class PostData {
    postId: number;
    content: string;
    user: UserData;
    comments: CommentData[] = new Array();
    images: ImageData[] = new Array();
    postedDate: string;

    constructor(data) {
        this.postId = data.postId;
        this.content = data.content;
        this.postedDate = data.postedDate;
        console.log(data);
        this.user = new UserData(data.userId.userId, data.userId.fname, data.userId.lname,
            data.userId.password, data.userId.imageid, data.userId.email);

        // the this.user should update to the real owner in the future
        // pulls comment data out of json response
        for (let i = 0; i < data.comments.length; i++) {
            console.log(data.comments[i].text);
            this.comments.push(new CommentData(data.comments[i].commentId, 0,
                this.user, data.comments[i].content));
        }
        // pulls image links out of json
        for (let i = 0; i < data.imageList.length; i++) {
            this.images.push(new ImageData(data.imageList[0].image_id,
                data.imageList[i].link, this.user));
                console.log(data.imageList[i].link);
        }
    }

}
