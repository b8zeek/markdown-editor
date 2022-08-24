import { useState } from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import Pre from '../components/Pre'

import { GET_USER } from '../graphql/queries'

const GraphQLPage = () => {
    const { data } = useQuery(GET_USER)

    console.log(data)

    return (
        <Container>
            <h1>GraphQL Page</h1>
            {data && <Pre>{JSON.stringify(data, null, 2)}</Pre>}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export default GraphQLPage
