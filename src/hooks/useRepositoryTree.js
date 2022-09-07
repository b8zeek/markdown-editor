import { useApolloClient } from '@apollo/client'
import { useQuery } from '@apollo/client/react/hooks'

import { GET_USER, GET_REPOSITORY_TREE } from '@graphql'
import { parseTreeData } from '@utils'

export function useRepositoryTree(name, path) {
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

    if (data) return { data: parseTreeData(data), loading }
    if (previousData) return { data: parseTreeData(previousData), loading }
    return { data: { repositoryTree: [], oid: '' }, loading }
}
