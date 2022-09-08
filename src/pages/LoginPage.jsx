import { useState } from 'react'
import styled from 'styled-components'

import { Heading, Paragraph, Button } from '@components'

export function LoginPage({ addNewToken }) {
    const [newToken, enterNewToken] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        addNewToken(newToken)
    }

    function openSourceCode() {
        window.open('https://github.com/bejzik8/markdown-editor')
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Heading fontSize='32px' marginBottom='12px' rainbow>
                    Greetings Traveler!
                </Heading>
                <Paragraph textAlign='center'>
                    In order to use the application, you'll gonna have to provide GitHub's personal access token which
                    will be stored in the local storage. Source code of the application is{' '}
                    <Span onClick={openSourceCode}>over here</Span>.
                </Paragraph>
                <Input value={newToken} onChange={event => enterNewToken(event.target.value)} />
                <Button type='submit' disabled={newToken.length === 0}>
                    Authenticate
                </Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    max-width: var(--application-max-width);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

const Form = styled.form`
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Input = styled.input`
    min-width: 350px;
    height: 28px;
    padding: 0 10px;
    font-size: 14px;
    text-align: center;
    background-color: #0d1117;
    border: 1px solid #30363d;
    border-radius: 6px;
    margin: 30px 0 10px;

    &:focus {
        background-color: #161b22;
        outline: none;
    }
`

const Span = styled.span`
    color: #58a6ff;
    cursor: pointer;
`
