import { UserData } from './userdata.class';

export class ImageData {
    imageId: number;
    url: string;
    user: UserData;

    constructor(imageId: number, url: string, user: UserData) {
        this.imageId = imageId;
        this.url = url;
        this.user = user;
    }

}
