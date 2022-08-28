import { useState, useEffect } from 'react'
import { useApolloClient } from '@apollo/client'

import { LoginPage } from '../pages'

export function AuthenticationGuard({ children }) {
    const [personalAccessToken, setPersonalAccessToken] = useState(null)
    const client = useApolloClient()

    useEffect(() => {
        const storageToken = localStorage.getItem('personal-access-token')
        setPersonalAccessToken(!!storageToken)
    }, [])

    const addNewToken = token => {
        console.log(client)
        console.log(token)
        client.link.options.headers.Authorization = `bearer ${token}`
        setPersonalAccessToken(token)
        localStorage.setItem('personal-access-token', token)
    }

    return personalAccessToken ? children : <LoginPage addNewToken={addNewToken} />
}
