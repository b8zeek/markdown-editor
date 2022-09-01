import styled from 'styled-components'

export const Heading = ({ children }) => <StyledH1>{children}</StyledH1>

const StyledH1 = styled.h1`
    line-height: 32px;
    font-size: 24px;
    margin: 0 0 24px;
`
