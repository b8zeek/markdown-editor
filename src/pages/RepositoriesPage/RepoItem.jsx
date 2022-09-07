import styled from 'styled-components'

export const RepoItem = ({ name, url, createdAt, updatedAt, onClick }) => {
    return (
        <RepoItemContainer onClick={onClick}>
            <Paragraph bold marginBottom>
                {name}
            </Paragraph>
            <Paragraph>{url}</Paragraph>
            <Paragraph>Created: {new Date(createdAt).toLocaleDateString()}</Paragraph>
            <Paragraph>Updated: {new Date(updatedAt).toLocaleDateString()}</Paragraph>
        </RepoItemContainer>
    )
}

export const PreloaderRepoItem = () => {
    return (
        <RepoItemContainer>
            <PreloaderText marginBottom />
            <PreloaderText width='90%' />
            <PreloaderText />
            <PreloaderText />
        </RepoItemContainer>
    )
}

const RepoItemContainer = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 20%;
    padding: 20px;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`

const Paragraph = styled.p`
    line-height: 16px;
    font-size: 12px;
    margin: 0;

    ${({ bold }) => bold && 'font-weight: 800;'}
    ${({ marginBottom }) => marginBottom && 'margin-bottom: 8px;'}
`

const PreloaderText = styled.div`
    height: 12px;
    width: ${props => props.width || '60%'};
    background: linear-gradient(90deg, rgba(100, 100, 100, 0.5), rgba(50, 50, 50, 0.1));
    background-size: 200px 100px;
    border-radius: 4px;
    margin-top: 4px;
    ${({ marginBottom }) => marginBottom && 'margin-bottom: 12px;'}
`