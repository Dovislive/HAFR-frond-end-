export class User {
    public id?: number;
    public username?: string;
    public password?: string;
    public firstName?: string;
    public lastName?: string;
    public email?: string;
    public confirmEmail?: string;
    public confirmCode?: string;
    constructor(id = 0) {
        this.id = id;
    }
}