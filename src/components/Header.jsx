import styled from 'styled-components'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <Container>
            <HeaderContent>
                <Navigation>
                    <StyledLink to=''>Home</StyledLink>
                    <StyledLink to='graphql'>Graph QL</StyledLink>
                </Navigation>
            </HeaderContent>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    padding: 12px 0;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    margin: 0 auto;
`

const HeaderContent = styled.div`
    max-width: var(--application-max-width);
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

const Navigation = styled.nav`
    height: 24px;
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
