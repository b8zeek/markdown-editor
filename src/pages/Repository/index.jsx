import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { useRepositoryTree, useFile } from '../../hooks'

import { Heading, Modal } from '../../components'
import { FilesTable } from './FilesTable'

export function Repository() {
    const [repositoryName, setRepositoryName] = useState('')
    const [branchName, setBranchName] = useState('')
    const [currentPath, setCurrentPath] = useState([])
    const [selectedFile, setSelectedFile] = useState('')

    const params = useParams()

    useEffect(() => {
        const [name, path] = params.repository.split('~')

        setRepositoryName(name)
        setBranchName(path)
    }, [])

    const closeFile = () => setSelectedFile('')

    const { repositoryTree, oid } = useRepositoryTree(repositoryName, `${branchName}:${currentPath.join('/')}`)
    const fileContent = useFile(repositoryName, `${branchName}:${selectedFile}`)

    const toTheRootFolder = () => setCurrentPath([])
    const folderUp = () => setCurrentPath(currentPath => [...currentPath].splice(0, currentPath.length - 1))
    const toFolder = index => setCurrentPath(currentPath => [...currentPath].splice(0, index + 1))
    const openFileOrFolder = (type, path) => (type === 'tree' ? setCurrentPath(path.split('/')) : setSelectedFile(path))

    return (
        <Container>
            {repositoryName && <Heading>{repositoryName}</Heading>}
            {repositoryTree.length !== 0 && (
                <FilesTable
                    branchName={branchName}
                    currentPath={currentPath}
                    repositoryTree={repositoryTree}
                    openFileOrFolder={openFileOrFolder}
                    toFolder={toFolder}
                    folderUp={folderUp}
                    toTheRootFolder={toTheRootFolder}
                />
            )}
            {fileContent?.text && <Modal text={fileContent.text} closeFile={closeFile} />}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
