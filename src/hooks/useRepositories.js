import { useQuery } from '@apollo/client/react'
import { GET_REPOSITORIES } from '../graphql'

import { parseRepositoriesData } from '../utils'

export function useRepositories() {
    const { data } = useQuery(GET_REPOSITORIES)

    return parseRepositoriesData(data)
}
