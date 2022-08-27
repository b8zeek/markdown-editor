import { useState } from 'react'
import styled from 'styled-components'

import { useUser, useRepositories, useRepositoryTree, useFile } from '../hooks'

import { Heading } from '../components'

import folder from '../assets/svgs/folder.svg'
import file from '../assets/svgs/file.svg'

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

export const GraphQLPage = () => {
    const [selectedRepo, setSelectedRepo] = useState(null)
    const [currentPath, setCurrentPath] = useState([])
    const [selectedFile, setSelectedFile] = useState('')

    const user = useUser()
    const repositories = useRepositories()
    const repositoryTree = useRepositoryTree(
        user.login,
        selectedRepo?.name,
        `${selectedRepo?.defaultBranchRefName}:${currentPath.join('/')}`
    )
    const fileContent = useFile(user.login, selectedRepo?.name, `${selectedRepo?.defaultBranchRefName}:${selectedFile}`)

    console.log('USER:', user)
    console.log('REPOSITORIES:', repositories)
    console.log('REPOSITORY TREE:', repositoryTree)
    console.log('FILE CONTENT:', fileContent)

    const selectRepo = repo => setSelectedRepo(repo)
    const toTheRootFolder = () => setCurrentPath([])
    const folderUp = () => setCurrentPath(currentPath => [...currentPath].splice(0, currentPath.length - 1))
    const toFolder = index => setCurrentPath(currentPath => [...currentPath].splice(0, index + 1))
    const openFileOrFolder = (type, path) => (type === 'tree' ? setCurrentPath(path.split('/')) : setSelectedFile(path))

    return (
        <Container>
            <UserInfoContainer>
                <PageName>GraphQL Page</PageName>
                {user.login && (
                    <UserData>
                        <UserInfo>
                            <Paragraph bold marginBottom>
                                {user.name}
                            </Paragraph>
                            <Paragraph>{user.bio}</Paragraph>
                        </UserInfo>
                        <UserImage src={user.avatarUrl} />
                    </UserData>
                )}
            </UserInfoContainer>
            {selectedRepo ? (
                <>
                    <Heading>{selectedRepo.name}</Heading>
                    {repositoryTree.length !== 0 && (
                        <FilesContainer>
                            <FilesHeader>
                                <RepoHeading>
                                    <FolderSpan
                                        clickable={currentPath.length !== 0}
                                        onClick={currentPath.length !== 0 ? toTheRootFolder : undefined}
                                    >
                                        {selectedRepo.defaultBranchRefName}
                                    </FolderSpan>
                                    <SlashSpan>/</SlashSpan>
                                    {currentPath.map((folder, index) => (
                                        <>
                                            <FolderSpan
                                                clickable={currentPath.length > index + 1}
                                                onClick={
                                                    currentPath.length > index + 1
                                                        ? toFolder.bind(null, index)
                                                        : undefined
                                                }
                                            >
                                                {folder}
                                            </FolderSpan>
                                            <SlashSpan>/</SlashSpan>
                                        </>
                                    ))}
                                </RepoHeading>
                            </FilesHeader>
                            <FilesTable>
                                {currentPath.length !== 0 && (
                                    <FileItem>
                                        <FolderUp onClick={folderUp}>. .</FolderUp>
                                    </FileItem>
                                )}
                                {repositoryTree.map(entry => (
                                    <FileItem key={entry.id}>
                                        <FileIcon src={entry.type === 'tree' ? folder : file} alt='123' />
                                        <FileText onClick={() => openFileOrFolder(entry.type, entry.path)}>
                                            {entry.name}
                                        </FileText>
                                    </FileItem>
                                ))}
                            </FilesTable>
                        </FilesContainer>
                    )}
                </>
            ) : repositories.length !== 0 ? (
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
            ) : (
                <p>Fetching...</p>
            )}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const UserInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`

const PageName = styled.h1`
    display: inline-block;
    margin: 0;
`

const UserData = styled.div`
    padding: 10px;
    border: 1px solid #d0d7de;
    border-radius: 6px;
`

const UserInfo = styled.div`
    display: inline-block;
    vertical-align: top;
    margin-right: 20px;
`

const Paragraph = styled.p`
    line-height: 16px;
    font-size: 12px;
    margin: 0;

    ${({ bold }) => bold && 'font-weight: 800;'}
    ${({ marginBottom }) => marginBottom && 'margin-bottom: 8px;'}
`

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
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

const FilesContainer = styled.div`
    width: 100%;
`

const FilesHeader = styled.div`
    padding: 16px;
    border: 1px solid #30363d;
    border-bottom: none;
    border-radius: 6px 6px 0 0;
    background-color: #161b22;
`

const FilesTable = styled.div`
    border: 1px solid #30363d;
    border-top: none;
    border-radius: 0 0 6px 6px;
`

const FileItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 16px;
    border-top: 1px solid #21262d;
`

const RepoHeading = styled.p`
    line-height: 1.5;
    font-size: 14px;
    color: #c9d1d9;
    margin: 0;
`

const FileText = styled.a`
    line-height: 1.5;
    font-size: 14px;
    color: #c9d1d9;
    cursor: pointer;
    margin: 0;

    &:hover {
        color: #58a6ff;
        text-decoration: underline;
    }
`

const FileIcon = styled.img`
    margin-right: 16px;
`

const FolderUp = styled.a`
    display: block;
    width: 100%;
    line-height: 1.5;
    font-size: 14px;
    font-weight: 600;
    color: #58a6ff;
    cursor: pointer;
`

const FolderSpan = styled.span`
    font-weight: 600;
    color: #c9d1d9;

    ${({ clickable }) =>
        clickable &&
        `
        color: #58a6ff;
        cursor: pointer;

        &:hover { text-decoration: underline; }
    `}
`

const SlashSpan = styled.span`
    margin: 0 4px;
`

// app bg #0d1117
// header bg #161b22
// between border #21262d
