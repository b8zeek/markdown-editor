import { useState } from 'react'
import styled from 'styled-components'
import axios from './axios'

function App() {
    const [userData, setUserData] = useState(null)

    const getUserData = async () => {
        const { data } = await axios.get('/users/bejzik8')

        setUserData(data)
    }

    return (
        <Container>
            <Paragraph>Mirko Basic GitHub Data:</Paragraph>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
            {!userData && <Button onClick={getUserData}>Get GitHub User</Button>}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0;
    margin: 0 auto;
`

const Paragraph = styled.p`
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
    align-self: center;

    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
`

export default App
