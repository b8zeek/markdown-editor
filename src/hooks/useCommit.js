import { useApolloClient } from '@apollo/client'
import { useMutation } from '@apollo/client'
import { useAtomValue } from 'jotai'

import { repoStoreAtom } from '@/state'

import { GET_USER, GET_REPOSITORY_TREE, COMMIT } from '@graphql'

export const useCommit = (text, commitMessage, oid) => {
    const client = useApolloClient()

    const { repositoryName, branchName, currentPath, selectedFile } = useAtomValue(repoStoreAtom)

    const { user } = client.readQuery({ query: GET_USER })

    // GET REPO OID

    const commitChanges = useMutation(COMMIT)[0]

    const commitHandler = async () => {
        try {
            const result = await commitChanges({
                variables: {
                    ownerAndRepo: `${user.login}/${repositoryName}`,
                    branchName,
                    message: commitMessage,
                    path: 'test.md',
                    content: btoa(text),
                    oid
                }
            })

            console.log('COMMIT DATA:', result)
        } catch (error) {
            console.error(error)
        }
    }

    return commitHandler
}
