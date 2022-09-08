export class File {
    constructor(data) {
        this.text = data.object.text
        this.oid = data.defaultBranchRef.target.history.nodes[0].oid
    }
}
