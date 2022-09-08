import styled from 'styled-components'

export const Heading = ({ children, rainbow }) => <StyledH1 rainbow={rainbow}>{children}</StyledH1>

const StyledH1 = styled.h1`
    line-height: 32px;
    font-size: 24px;
    font-family: AllianceNo2, sans-serif;
    font-weight: 800;
    margin: 0 0 24px;

    ${({ rainbow }) =>
        rainbow &&
        `
            background-image: linear-gradient(
                71.18deg,
                rgb(0, 34, 255) -27.32%,
                rgb(0, 34, 255) -16.39%,
                rgb(81, 121, 254) -7.38%,
                rgb(165, 237, 182) 30.59%,
                rgb(250, 232, 90) 46.06%,
                rgb(253, 172, 62) 62.61%,
                rgb(255, 92, 0) 75.82%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        `}
`
