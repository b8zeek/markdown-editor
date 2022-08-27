import { useQuery } from '@apollo/client/react/hooks'
import { GET_REPOSITORY_TREE } from '../graphql'

import { parseTreeData } from '../utils'

export function useRepositoryTree(owner, name, path) {
    const { data } = useQuery(GET_REPOSITORY_TREE, {
        variables: {
            owner,
            name,
            path
        },
        skip: !owner || !name || !path
    })

    return parseTreeData(data)
}
