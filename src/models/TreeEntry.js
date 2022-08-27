export class TreeEntry {
    constructor(data) {
        this.id = data.oid || ''
        this.name = data.name || ''
        this.path = data.path || ''
        this.size = data.size || 0
        this.type = data.type || ''
    }
}
