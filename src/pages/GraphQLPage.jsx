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
            <UserInfoContainer>
                <PageName>GraphQL Page</PageName>
                {repositoriesData?.viewer && (
                    <UserData>
                        <UserInfo>
                            <UserName bold marginBottom>
                                {repositoriesData.viewer.name}
                            </UserName>
                            <UserName>{repositoriesData.viewer.bio}</UserName>
                        </UserInfo>
                        <UserImage src={repositoriesData.viewer.avatarUrl} />
                    </UserData>
                )}
            </UserInfoContainer>
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

const UserInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`

const PageName = styled.h1`
    display: inline-block;
    margin: 0;
`

const UserData = styled.div`
    padding: 10px;
    border: 1px solid #d0d7de;
    border-radius: 5px;
`

const UserInfo = styled.div`
    display: inline-block;
    vertical-align: top;
    margin-right: 20px;
`

const UserName = styled.p`
    line-height: 16px;
    margin: 0;

    ${({ bold }) => bold && 'font-weight: 800;'}
    ${({ marginBottom }) => marginBottom && 'margin-bottom: 8px;'}
`

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

export default GraphQLPage
