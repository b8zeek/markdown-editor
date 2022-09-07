import styled from 'styled-components'

import folder from '@assets/svgs/folder.svg'
import file from '@assets/svgs/file.svg'

export const FileItem = ({ entry, openFileOrFolder }) => (
    <Container key={entry.id}>
        <FileIcon src={entry.type === 'tree' ? folder : file} alt='123' />
        <FileText onClick={() => openFileOrFolder(entry.type, entry.path)}>{entry.name}</FileText>
    </Container>
)

export const PreloaderFileItem = () => {}

export const FolderUpItem = ({ folderUp }) => (
    <Container>
        <FolderUp onClick={folderUp}>. .</FolderUp>
    </Container>
)

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 16px;
    border-top: 1px solid #21262d;
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

const PreloaderText = styled.div`
    height: 14px;
    width: 30%;
    background: linear-gradient(90deg, rgba(100, 100, 100, 0.5), rgba(50, 50, 50, 0.1));
    background-size: 200px 100px;
    border-radius: 4px;
    margin: 4px 0 3px;
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
