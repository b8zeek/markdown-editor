import { useQuery } from '@apollo/client/react'
import { GET_USER } from '../graphql'
import { useAtomValue } from 'jotai'
import { personalAccessTokenAtom } from '../state'

import { parseUserData } from '../utils'

export function useUser() {
    const personalAccessToken = useAtomValue(personalAccessTokenAtom)

    const { data, loading, refetch } = useQuery(GET_USER, {
        skip: !personalAccessToken
    })

    return { data: parseUserData(data), loading, refetch }
}
