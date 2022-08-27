import { useQuery } from '@apollo/client/react'
import { GET_USER_AND_REPOSITORIES } from '../graphql'

import { parseUserAndRepositoriesData } from '../utils'

export function useRepositories() {
    const { data } = useQuery(GET_USER_AND_REPOSITORIES)

    return parseUserAndRepositoriesData(data)
}
