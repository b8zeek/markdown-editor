import styled from 'styled-components'
import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/HomePage'
import GraphQLPage from './pages/GraphQLPage'

function App() {
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <StyledLink to=''>Home</StyledLink>
                    <StyledLink to='graphql'>Graph QL</StyledLink>
                </HeaderContent>
            </Header>
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
`

const Header = styled.div`
    width: 100%;
    height: 24px;
    position: fixed;
    top: 0;
    padding: 12px 0;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 0 auto;
`

const HeaderContent = styled.nav`
    max-width: 1280px;
    margin: 0 auto;
`

const StyledLink = styled(Link)`
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 800;
    color: white;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
    text-decoration: none;

    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
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
