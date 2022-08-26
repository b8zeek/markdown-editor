import { useState } from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import { Heading, Pre } from '../components'

import { GET_USER, GET_USER_AND_REPOSITORIES } from '../graphql/queries'

const RepoItem = ({ name, url, createdAt, updatedAt }) => {
    return (
        <RepoItemContainer>
            <Paragraph bold marginBottom>
                {name}
            </Paragraph>
            <Paragraph>{url}</Paragraph>
            <Paragraph>Created: {new Date(createdAt).toLocaleDateString()}</Paragraph>
            <Paragraph>Updated: {new Date(updatedAt).toLocaleDateString()}</Paragraph>
        </RepoItemContainer>
    )
}

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
                            <Paragraph bold marginBottom>
                                {repositoriesData.viewer.name}
                            </Paragraph>
                            <Paragraph>{repositoriesData.viewer.bio}</Paragraph>
                        </UserInfo>
                        <UserImage src={repositoriesData.viewer.avatarUrl} />
                    </UserData>
                )}
            </UserInfoContainer>
            {repositoriesData && (
                <>
                    <Heading>Repositories</Heading>
                    {/* <Pre>{JSON.stringify(repositoriesData, null, 2)}</Pre> */}
                    <RepoContainer>
                        {repositoriesData.viewer.repositories.nodes.map(({ id, name, url, createdAt, updatedAt }) => (
                            <RepoItem key={id} name={name} url={url} createdAt={createdAt} updatedAt={updatedAt} />
                        ))}
                    </RepoContainer>
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

const Paragraph = styled.p`
    line-height: 16px;
    font-size: 12px;
    margin: 0;

    ${({ bold }) => bold && 'font-weight: 800;'}
    ${({ marginBottom }) => marginBottom && 'margin-bottom: 8px;'}
`

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

const RepoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const RepoItemContainer = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 20%;
    padding: 20px;
    border: 1px solid #d0d7de;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
`

export default GraphQLPage
