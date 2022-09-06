import styled from 'styled-components'

import folder from '@assets/svgs/folder.svg'
import file from '@assets/svgs/file.svg'

export const FilesTable = ({
    branchName,
    currentPath,
    repositoryTree,
    openFileOrFolder,
    toFolder,
    folderUp,
    toTheRootFolder
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
            {currentPath.length !== 0 && (
                <FileItem>
                    <FolderUp onClick={folderUp}>. .</FolderUp>
                </FileItem>
            )}
            {repositoryTree.map(entry => (
                <FileItem key={entry.id}>
                    <FileIcon src={entry.type === 'tree' ? folder : file} alt='123' />
                    <FileText onClick={() => openFileOrFolder(entry.type, entry.path)}>{entry.name}</FileText>
                </FileItem>
            ))}
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
