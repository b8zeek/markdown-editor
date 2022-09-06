import { useEffect } from 'react'
import { useQuery } from '@apollo/client/react'

import { GET_REPOSITORIES } from '@graphql'
import { parseRepositoriesData } from '@utils'

import { useUIService } from '@services'

export function useRepositories() {
    const { showSpinner, hideSpinner } = useUIService()

    const { data, loading } = useQuery(GET_REPOSITORIES)

    useEffect(() => {
        loading ? showSpinner() : hideSpinner()
    }, [loading])

    return parseRepositoriesData(data)
}
