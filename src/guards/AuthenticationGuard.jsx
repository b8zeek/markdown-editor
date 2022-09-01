import { useSetAtom } from 'jotai'
import { useApolloClient } from '@apollo/client'

import { personalAccessTokenAtom } from '../state'

import { useUser } from '../hooks'

import { LoginPage } from '../pages'

export function AuthenticationGuard({ children }) {
    const setPersonalAccessToken = useSetAtom(personalAccessTokenAtom)
    const client = useApolloClient()

    const { data, loading, refetch } = useUser()

    const addNewToken = token => {
        client.link.options.headers.Authorization = `bearer ${token}`
        setPersonalAccessToken(token)
        localStorage.setItem('personal-access-token', token)

        refetch()
    }

    if (loading) return

    return data.login ? children : <LoginPage addNewToken={addNewToken} />
}
