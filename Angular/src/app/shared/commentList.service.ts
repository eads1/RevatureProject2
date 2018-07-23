import { CommentObject } from './comment';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentList {

    private listComments: CommentObject[] = [
        {'id': 1,
        'post_id': 10,
        'owner_id': 20,
        'content': 'This is SERIOUSLY ONE strange BIRDIE!',
        'date_post': 'Today, DUH!'},
        {'id': 2,
        'post_id': 11,
        'owner_id': 21,
        'content': 'This is ONE F**KED UP...pond!',
        'date_post': 'Tomorrow, Jeez!'
        },
        {'id': 3,
        'post_id': 12,
        'owner_id': 22,
        'content': 'Seriously, change the picture!',
        'date_post': 'Right Now!'
        },
        {'id': 4,
        'post_id': 13,
        'owner_id': 23,
        'content': 'LOL! Birdie became REAL!',
        'date_post': 'Yesterday at 11:59T0091919 PM - New York Best Boi Time'
        },
        {'id': 5,
        'post_id': 14,
        'owner_id': 24,
        'content': 'It\' the ugly duckling! Shoo!',
        'date_post': 'Tuesday of Next Week!'
        },
    ];

    public getListComments(): CommentObject[] {
        return this.listComments;
    }

    public addComment(oneComment: CommentObject) {
        this.listComments.push(oneComment);
    }
}
