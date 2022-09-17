import styled from 'styled-components'

export const Paragraph = ({ children, lineHeight, textAlign, bold, marginBottom }) => (
    <StyledP lineHeight={lineHeight} textAlign={textAlign} bold={bold} marginBottom={marginBottom}>
        {children}
    </StyledP>
)

const StyledP = styled.p`
    line-height: 16px;
    font-size: 12px;
    color: #c9d1d9;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0;

    ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
    ${({ bold }) => bold && 'font-weight: 800;'}
    ${({ marginBottom }) => marginBottom && 'margin-bottom: 8px;'}
`
