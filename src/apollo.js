import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `bearer ${import.meta.env.VITE_PERSONAL_ACCESS_TOKEN}`
    },
    cache: new InMemoryCache()
})
