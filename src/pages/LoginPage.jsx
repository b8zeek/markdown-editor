import { useState } from 'react'
import styled from 'styled-components'

import { Button } from '@components'

export function LoginPage({ addNewToken }) {
    const [newToken, enterNewToken] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        addNewToken(newToken)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
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
    margin-bottom: 10px;

    &:focus {
        background-color: #161b22;
        outline: none;
    }
`
