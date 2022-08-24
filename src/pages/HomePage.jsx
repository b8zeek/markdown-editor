import { useState } from 'react'
import styled from 'styled-components'
import axios from '../axios'

import Pre from '../components/Pre'

const HomePage = () => {
    const [userData, setUserData] = useState(null)
    const [userRepositories, setUserRepositories] = useState(null)

    const getUserData = async () => {
        const { data } = await axios.get('/user')

        setUserData(data)
    }

    const getUserRepos = async () => {
        const { data } = await axios.get('/user/repos', {
            params: {
                per_page: 100
            }
        })
        console.log('REPOS DATA:', data)

        setUserRepositories(data)
    }

    return (
        <Container>
            {userData ? (
                <>
                    <Heading>Authenticated GitHub User Data:</Heading>
                    <Pre>{JSON.stringify(userData, null, 2)}</Pre>
                </>
            ) : (
                <Button onClick={getUserData}>Get Authenticated GitHub User Data</Button>
            )}
            {userRepositories ? (
                <>
                    <Heading>Authenticated GitHub User Repos:</Heading>
                    <Pre>{JSON.stringify(userRepositories, null, 2)}</Pre>
                </>
            ) : (
                <Button onClick={getUserRepos}>Get Authenticated GitHub User Repos</Button>
            )}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Heading = styled.h1`
    line-height: 32px;
    font-size: 24px;
    margin: 0;
`

const Button = styled.a`
    display: inline-block;
    vertical-align: top;
    padding: 4px 20px;
    border-radius: 5px;
    user-select: none;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    align-self: start;
    margin-bottom: 20px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
`

export default HomePage
