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
    query GetRepositoryTree($owner: String!, $name: String!, $path: String!) {
        repository: repository(owner: $owner, name: $name) {
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
        oid: repository(owner: $owner, name: $name) {
            defaultBranchRef {
                target {
                    ... on Commit {
                        history(first: 1) {
                            nodes {
                                oid
                            }
                        }
                    }
                }
            }
        }
    }
`

export const GET_FILE = gql`
    query GetFile($owner: String!, $name: String!, $path: String!) {
        repository(owner: $owner, name: $name) {
            object(expression: $path) {
                ... on Blob {
                    text
                }
            }
        }
    }
`
