import { User, Repository } from '../models'

export function parseUserAndRepositoriesData(data) {
    return {
        user: data ? new User(data.user) : null,
        repositories: data ? data.repositories.repositories.nodes.map(repo => new Repository(repo)) : null
    }
}
