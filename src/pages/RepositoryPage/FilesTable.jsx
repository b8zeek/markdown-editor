import styled from 'styled-components'

import { FileItem, PreloaderFileItem, FolderUpItem } from './FileItem'

export const FilesTable = ({
    branchName,
    currentPath,
    repositoryTree,
    openFileOrFolder,
    toFolder,
    folderUp,
    toTheRootFolder,
    loading
}) => (
    <FilesContainer>
        <FilesHeader>
            <RepoHeading>
                <FolderSpan
                    clickable={currentPath.length !== 0}
                    onClick={currentPath.length !== 0 ? toTheRootFolder : undefined}
                >
                    {branchName}
                </FolderSpan>
                <SlashSpan>/</SlashSpan>
                {currentPath.map((folder, index) => (
                    <>
                        <FolderSpan
                            clickable={currentPath.length > index + 1}
                            onClick={currentPath.length > index + 1 ? toFolder.bind(null, index) : undefined}
                        >
                            {folder}
                        </FolderSpan>
                        <SlashSpan>/</SlashSpan>
                    </>
                ))}
            </RepoHeading>
        </FilesHeader>
        <FilesBody>
            {loading ? (
                Array(10)
                    .fill()
                    .map((_, index) => <PreloaderFileItem key={index} />)
            ) : (
                <>
                    {currentPath.length !== 0 && <FolderUpItem folderUp={folderUp} />}
                    {repositoryTree.map(entry => (
                        <FileItem key={entry.id} entry={entry} openFileOrFolder={openFileOrFolder} />
                    ))}
                </>
            )}
        </FilesBody>
    </FilesContainer>
)

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

const FilesBody = styled.div`
    border: 1px solid #30363d;
    border-top: none;
    border-radius: 0 0 6px 6px;
`

const RepoHeading = styled.p`
    line-height: 1.5;
    font-size: 14px;
    color: #c9d1d9;
    margin: 0;
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
