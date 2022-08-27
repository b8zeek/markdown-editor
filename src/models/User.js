export class User {
    constructor(data) {
        this.login = data.login
        this.email = data.email
        this.url = data.url
        this.name = data.name
        this.bio = data.bio
        this.avatarUrl = data.avatarUrl
    }
}
