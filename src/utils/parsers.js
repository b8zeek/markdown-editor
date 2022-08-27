import { User, Repository, TreeEntry, File } from '../models'

export function parseUserData(data) {
    return new User(data?.user)
}

export function parseRepositoriesData(data) {
    return data ? data.repositories.repositories.nodes.map(repo => new Repository(repo)) : []
}

export function parseTreeData(data) {
    return data.repository.object.entries.map(entry => new TreeEntry(entry))
}

export function parseFileData(data) {
    return data ? new File(data.repository.object) : null
}
