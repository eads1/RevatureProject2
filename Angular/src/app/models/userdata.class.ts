export class UserData {
    userId: number;
    fname: string;
    lname: string;
    password: string;
    imageUrl: string;
    email: string;

    constructor(userId: number, fname: string, lname: string, password: string, imageUrl: string, email: string) {
        this.userId = userId;
        this.fname = fname;
        this.lname = lname;
        this.password = password;
        this.imageUrl = imageUrl;
        this.email = email;
    }

    getFname() {
        return this.fname;
    }
}
