import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `bearer ${localStorage.getItem('personal-access-token')}`
    },
    cache: new InMemoryCache()
})
