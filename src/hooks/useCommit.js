import { useApolloClient } from '@apollo/client'
import { useMutation } from '@apollo/client'
import { useAtomValue } from 'jotai'

import { repoStoreAtom } from '@/state'

import { GET_USER, COMMIT } from '@graphql'

export const useCommit = (text, commitMessage, oid) => {
    const client = useApolloClient()

    const { repositoryName, branchName, selectedFile } = useAtomValue(repoStoreAtom)

    const { user } = client.readQuery({ query: GET_USER })

    const commitChanges = useMutation(COMMIT)[0]

    const commitHandler = async () => {
        try {
            const result = await commitChanges({
                variables: {
                    ownerAndRepo: `${user.login}/${repositoryName}`,
                    branchName,
                    message: commitMessage,
                    path: selectedFile,
                    content: btoa(text),
                    oid
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    return commitHandler
}
