import { useAtom } from 'jotai'
import { useApolloClient } from '@apollo/client'

import { personalAccessTokenAtom } from '../state'

import { useUser } from '../hooks'

import { LoginPage } from '../pages'

export function AuthenticationGuard({ children }) {
    const [personalAccessToken, setPersonalAccessToken] = useAtom(personalAccessTokenAtom)
    const client = useApolloClient()

    const { data, refetch } = useUser(personalAccessToken)

    const addNewToken = token => {
        client.link.options.headers.Authorization = `bearer ${token}`
        setPersonalAccessToken(token)
        localStorage.setItem('personal-access-token', token)

        refetch()
    }

    return data.login ? children : <LoginPage addNewToken={addNewToken} />
}
