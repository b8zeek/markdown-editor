import { useAtom } from 'jotai'
import { useApolloClient } from '@apollo/client'

import { personalAccessTokenAtom } from '../state'

import { LoginPage } from '../pages'

export function AuthenticationGuard({ children }) {
    const [personalAccessToken, setPersonalAccessToken] = useAtom(personalAccessTokenAtom)
    const client = useApolloClient()

    const addNewToken = token => {
        client.link.options.headers.Authorization = `bearer ${token}`
        setPersonalAccessToken(token)
        localStorage.setItem('personal-access-token', token)
    }

    return personalAccessToken ? children : <LoginPage addNewToken={addNewToken} />
}
