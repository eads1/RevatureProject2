import { CommentObject } from './comment';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class CommentList {

    private listComments: CommentObject[] = [
        {'id': 1,
        'post_id': 10,
        'owner_id': 20,
        'content': 'This is SERIOUSLY ONE strange BIRDIE!',
        'date_post': 'Today, DUH!'}
    ];

    public getListComments(): CommentObject[] {
        return this.listComments;
    }

    public addComment(oneComment: CommentObject) {
        this.listComments.push(oneComment);
    }
}
