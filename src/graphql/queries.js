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
                }
            }
        }
    }
`
