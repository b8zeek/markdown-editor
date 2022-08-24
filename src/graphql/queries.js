import { gql } from '@apollo/client'

export const GET_USER = gql`
    query getUser {
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
