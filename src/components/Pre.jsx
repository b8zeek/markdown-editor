import styled from 'styled-components'

export const Pre = ({ children }) => <StyledPre>{children}</StyledPre>

const StyledPre = styled.pre`
    line-height: 16px;
    font-size: 12px;
    font-family: JetBrainsMono;
`
