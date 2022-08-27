export class Repository {
    constructor(data) {
        this.id = data.id
        this.url = data.url
        this.name = data.name
        this.description = data.description
        this.defaultBranchRefName = data.defaultBranchRef.name
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.visibility = data.visibility
    }
}
