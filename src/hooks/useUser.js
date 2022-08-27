import { useQuery } from '@apollo/client/react'
import { GET_USER } from '../graphql'

import { parseUserData } from '../utils'

export function useUser() {
    const { data } = useQuery(GET_USER)

    return parseUserData(data)
}
