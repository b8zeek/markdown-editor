import { User, Repository } from '../models'

export function parseUserData(data) {
    return new User(data?.user)
}

export function parseRepositoriesData(data) {
    return data ? data.repositories.repositories.nodes.map(repo => new Repository(repo)) : []
}
