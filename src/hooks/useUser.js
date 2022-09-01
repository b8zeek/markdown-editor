import { useQuery } from '@apollo/client/react'
import { GET_USER } from '../graphql'

import { parseUserData } from '../utils'

export function useUser(personalAccessToken) {
    const { data, refetch } = useQuery(GET_USER, {
        skip: !personalAccessToken
    })

    return { data: parseUserData(data), refetch }
}
