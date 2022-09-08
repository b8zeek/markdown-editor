import styled from 'styled-components'

export const Button = ({ children, onClick, disabled }) => (
    <StyledButton onClick={onClick} disabled={disabled}>
        {children}
    </StyledButton>
)

const StyledButton = styled.button`
    line-height: 20px;
    font-size: 12px;
    font-weight: 500;
    color: #c9d1d9;
    background-color: #21262d;
    border: 1px solid rgba(240, 246, 252, 0.1);
    border-radius: 6px;
    padding: 3px 12px;
    cursor: pointer;

    &:hover:enabled {
        background-color: #30363d;
        border: 1px solid #8b949e;
    }

    &:disabled {
        color: #8b949e;
        border: 1px solid #21262d;
        cursor: not-allowed;
    }
`
