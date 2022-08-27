export function AuthenticationGuard({ children }) {
    const personalAccessToken = localStorage.getItem('personal-access-token')

    return personalAccessToken ? children : <div>Log In</div>
}
