import styled from 'styled-components'

import HomePage from './pages/HomePage'

function App() {
    return (
        <Container>
            <HomePage />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin: 0 auto;
`

export default App
