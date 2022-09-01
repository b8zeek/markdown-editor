import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useUser } from '../hooks'

export function Header() {
    const { data: user } = useUser()

    return (
        <Container>
            <HeaderContent>
                <Navigation>
                    <StyledLink to=''>Home</StyledLink>
                </Navigation>
                <UserData>
                    <UserInfo>
                        <Paragraph bold marginBottom>
                            {user.name}
                        </Paragraph>
                        <Paragraph>{user.bio}</Paragraph>
                    </UserInfo>
                    <UserImage src={user.avatarUrl} />
                </UserData>
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

const UserData = styled.div`
    display: inline-flex;
    align-items: center;
`

const UserInfo = styled.div`
    display: inline-block;
    vertical-align: top;
    margin-right: 20px;
`

const Paragraph = styled.p`
    line-height: 12px;
    font-size: 12px;
    text-align: right;
    margin: 0;

    ${({ bold }) => bold && 'font-weight: 800;'}
    ${({ marginBottom }) => marginBottom && 'margin-bottom: 8px;'}
`

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
