import { gql } from '@apollo/client'

export const GET_USER = gql`
    query GetUser {
        viewer {
            avatarUrl
            bio
            email
            login
            name
            url
        }
    }
`

export const GET_USER_AND_REPOSITORIES = gql`
    query GetUserAndRepositories {
        viewer {
            avatarUrl
            bio
            email
            login
            name
            url
            repositories(first: 100, orderBy: { field: UPDATED_AT, direction: DESC }) {
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

export const GET_REPOSITORY = gql`
    query GetRepository($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
            defaultBranchRef {
                name
                target {
                    ... on Commit {
                        commitSHA: oid
                        tree {
                            treeSHA: oid
                            entries {
                                name
                                object {
                                    ... on Blob {
                                        blobSHA: oid
                                        byteSize
                                    }
                                }
                            }
                        }
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
