import { useQuery } from '@apollo/client/react/hooks'
import { GET_REPOSITORY_TREE } from '../graphql'

import { parseTreeData } from '../utils'

export function useRepositoryTree(owner, name, path) {
    const { data, previousData } = useQuery(GET_REPOSITORY_TREE, {
        variables: {
            owner,
            name,
            path
        },
        skip: !owner || !name || !path
    })

    if (data) return parseTreeData(data)
    if (previousData) return parseTreeData(previousData)
    return []
}
