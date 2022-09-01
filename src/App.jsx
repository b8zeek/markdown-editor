import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components'
import { HomePage, GraphQLPage } from './pages'

function App() {
    return (
        <Container>
            <Header />
            <Content>
                <Routes>
                    <Route path='' element={<HomePage />} />
                    <Route path='graphql' element={<GraphQLPage />} />
                </Routes>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    overflow: hidden;
`

const Content = styled.div`
    width: 100%;
    max-width: var(--application-max-width);
    display: flex;
    flex-direction: column;
    padding: 64px 0 20px;
    margin: 0 auto;
`

export default App
