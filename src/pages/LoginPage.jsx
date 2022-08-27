import styled from 'styled-components'

export function LoginPage() {
    return (
        <Container>
            <Input />
            <Button>Authenticate</Button>
        </Container>
    )
}

const Container = styled.div`
    max-width: var(--application-max-width);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    margin-bottom: 10px;

    &:focus {
        background-color: #161b22;
        outline: none;
    }
`

const Button = styled.button`
    line-height: 20px;
    font-size: 12px;
    font-weight: 500;
    color: #c9d1d9;
    background-color: #21262d;
    border: 1px solid rgba(240, 246, 252, 0.1);
    border-radius: 6px;
    padding: 3px 12px;
    cursor: pointer;

    &:hover {
        background-color: #30363d;
        border-collapse: #8b949e;
    }
`
