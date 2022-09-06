import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { useRepositories } from '@hooks'

import { Heading } from '@components'

const RepoItem = ({ name, url, createdAt, updatedAt, onClick }) => {
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

export const Repositories = () => {
    const navigate = useNavigate()

    const repositories = useRepositories()

    console.log('REPOSITORIES:', repositories)

    const selectRepo = repo => navigate(`/${repo.name}~${repo.defaultBranchRefName}`)

    return (
        <Container>
            {repositories.length !== 0 && (
                <>
                    <Heading>Repositories</Heading>
                    <RepoContainer>
                        {repositories.map(repo => (
                            <RepoItem
                                key={repo.id}
                                name={repo.name}
                                url={repo.url}
                                createdAt={repo.createdAt}
                                updatedAt={repo.updatedAt}
                                onClick={selectRepo.bind(null, repo)}
                            />
                        ))}
                    </RepoContainer>
                </>
            )}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Paragraph = styled.p`
    line-height: 16px;
    font-size: 12px;
    margin: 0;

    ${({ bold }) => bold && 'font-weight: 800;'}
    ${({ marginBottom }) => marginBottom && 'margin-bottom: 8px;'}
`

const RepoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

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
