import styled from 'styled-components'

import HomePage from './pages/HomePage'

function App() {
    return (
        <Container>
            <Header />
            <Content>
                <HomePage />
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

const Header = styled.div`
    width: 100%;
    height: 48px;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.1);
    top: 0;
    margin: 0 auto;
`

const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    padding: 64px 0 20px;
    margin: 0 auto;
`

export default App
