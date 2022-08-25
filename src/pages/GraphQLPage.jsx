import { useState } from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import { Heading, Pre } from '../components'

import { GET_USER, GET_USER_AND_REPOSITORIES } from '../graphql/queries'

const GraphQLPage = () => {
    // const { data: userData } = useQuery(GET_USER)
    const { data: repositoriesData } = useQuery(GET_USER_AND_REPOSITORIES)

    return (
        <Container>
            <h1>GraphQL Page</h1>
            {repositoriesData && (
                <>
                    <Heading>User Data</Heading>
                    <Pre>{JSON.stringify(repositoriesData, null, 2)}</Pre>
                </>
            )}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export default GraphQLPage
