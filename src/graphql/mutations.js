import { gql } from '@apollo/client'

export const COMMIT = gql`
    mutation Commit(
        $ownerAndRepo: String!
        $branchName: String!
        $message: String!
        $path: String!
        $content: Base64String!
        $oid: GitObjectID!
    ) {
        createCommitOnBranch(
            input: {
                branch: { repositoryNameWithOwner: $ownerAndRepo, branchName: $branchName }
                message: { headline: $message }
                fileChanges: { additions: [{ path: $path, contents: $content }] }
                expectedHeadOid: $oid
            }
        ) {
            commit {
                url
            }
        }
    }
`
