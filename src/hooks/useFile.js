import { useApolloClient } from '@apollo/client'
import { useQuery } from '@apollo/client/react/hooks'

import { GET_USER, GET_FILE } from '@graphql'
import { parseFileData } from '@utils'

export function useFile(name, branchName, selectedFile) {
    const client = useApolloClient()

    const { user } = client.readQuery({ query: GET_USER })

    const { data } = useQuery(GET_FILE, {
        variables: {
            owner: user.login,
            name,
            path: `${branchName}:${selectedFile}`
        },
        skip: !name || !branchName || !selectedFile,
        fetchPolicy: 'no-cache'
    })

    return parseFileData(data)
}
