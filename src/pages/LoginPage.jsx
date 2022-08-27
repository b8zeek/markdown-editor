import styled from 'styled-components'

export function LoginPage() {
    return (
        <Container>
            <Input />
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

const Input = styled.input`
    min-width: 350px;
    height: 28px;
    padding: 0 10px;
    font-size: 14px;
    text-align: center;
    background-color: #0d1117;
    border: 1px solid #30363d;
    border-radius: 6px;

    &:focus {
        background-color: #161b22;
        outline: none;
    }
`
