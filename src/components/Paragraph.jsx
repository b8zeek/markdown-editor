import styled from 'styled-components'

export const Paragraph = ({ children, lineHeight, textAlignRight, bold, marginBottom }) => (
    <StyledP lineHeight={lineHeight} textAlignRight={textAlignRight} bold={bold} marginBottom={marginBottom}>
        {children}
    </StyledP>
)

const StyledP = styled.p`
    line-height: 16px;
    font-size: 12px;
    margin: 0;

    ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`}
    ${({ textAlignRight }) => textAlignRight && 'text-align: right;'}
    ${({ bold }) => bold && 'font-weight: 800;'}
    ${({ marginBottom }) => marginBottom && 'margin-bottom: 8px;'}
`
