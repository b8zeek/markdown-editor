import { useQuery } from '@apollo/client/react'
import { GET_USER_AND_REPOSITORIES } from '../graphql/queries'

export function useRepositories() {
    const { data } = useQuery(GET_USER_AND_REPOSITORIES)

    return data
}
