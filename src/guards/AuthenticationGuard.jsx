import { LoginPage } from '../pages'

export function AuthenticationGuard({ children }) {
    const personalAccessToken = localStorage.getItem('personal-access-token')

    return personalAccessToken ? children : <LoginPage />
}
