import { useEffect } from 'react'
import { useQuery } from '@apollo/client/react'

import { GET_REPOSITORIES } from '@graphql'
import { parseRepositoriesData } from '@utils'

export function useRepositories() {
    const { data, loading } = useQuery(GET_REPOSITORIES)

    return {
        data: parseRepositoriesData(data),
        loading
    }
}
