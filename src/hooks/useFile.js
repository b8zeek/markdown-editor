import { useQuery } from '@apollo/client/react/hooks'

import { GET_FILE } from '../graphql'
import { parseFileData } from '../utils'

export function useFile(owner, name, path) {
    const { data } = useQuery(GET_FILE, {
        variables: {
            owner,
            name,
            path
        },
        skip: !owner || !name || !path
    })

    return parseFileData(data)
}
