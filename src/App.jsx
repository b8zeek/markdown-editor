import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import { useAtomValue } from 'jotai'
import { showSpinnerAtom } from '@/state'

import { Spinner, Header } from './components'
import { RepositoriesPage, RepositoryPage } from './pages'

function App() {
    const showSpinner = useAtomValue(showSpinnerAtom)

    return (
        <Container>
            <Header />
            <Content>
                <Routes>
                    <Route path='' element={<RepositoriesPage />} />
                    <Route path=':repository' element={<RepositoryPage />} />
                </Routes>
            </Content>
            {showSpinner && <Spinner />}
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
    padding: 84px 0 20px;
    margin: 0 auto;
`

export default App
