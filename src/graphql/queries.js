import { gql } from '@apollo/client'

export const GET_USER = gql`
    query GetUser {
        user: viewer {
            id
            avatarUrl
            bio
            email
            login
            name
            url
        }
    }
`

export const GET_REPOSITORIES = gql`
    query GetRepositories {
        repositories: viewer {
            id
            repositories(first: 100, orderBy: { field: PUSHED_AT, direction: DESC }) {
                totalCount
                pageInfo {
                    startCursor
                    endCursor
                    hasPreviousPage
                    hasNextPage
                }
                nodes {
                    id
                    createdAt
                    description
                    name
                    updatedAt
                    url
                    visibility
                    defaultBranchRef {
                        name
                    }
                }
            }
        }
    }
`

export const GET_REPOSITORY_TREE = gql`
    query GetRepositoryTree($name: String!, $owner: String!, $path: String!) {
        repository(name: $name, owner: $owner) {
            object(expression: $path) {
                ... on Tree {
                    entries {
                        oid
                        name
                        type
                        path
                        size
                    }
                }
            }
        }
    }
`
