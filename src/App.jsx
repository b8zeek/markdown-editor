import styled from 'styled-components'

function App() {
    return (
        <Container>
            <Paragraph>Mirko Basic</Paragraph>
            <Button>Get GitHub User</Button>
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
    text-align: center;
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
