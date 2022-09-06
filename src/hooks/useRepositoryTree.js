import { useEffect } from 'react'
import { useApolloClient } from '@apollo/client'
import { useQuery } from '@apollo/client/react/hooks'

import { GET_USER, GET_REPOSITORY_TREE } from '@graphql'
import { parseTreeData } from '@utils'

import { useUIService } from '@services'

export function useRepositoryTree(name, path) {
    const { showSpinner, hideSpinner } = useUIService()

    const client = useApolloClient()

    const { user } = client.readQuery({ query: GET_USER })

    const { data, previousData, loading } = useQuery(GET_REPOSITORY_TREE, {
        variables: {
            owner: user.login,
            name,
            path
        },
        skip: !name || !path
    })

    useEffect(() => {
        loading ? showSpinner() : hideSpinner()
    }, [loading])

    if (data) return parseTreeData(data)
    if (previousData) return parseTreeData(previousData)
    return { repositoryTree: [], oid: '' }
}
