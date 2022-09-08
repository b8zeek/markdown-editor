import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { useAtomValue } from 'jotai'

import { repoStoreAtom } from '@/state'

import { useRepositoryService } from '@services'

import { useFile, useCommit } from '@hooks'

import { Button } from '@components/Button'

export function Modal() {
    const [modalContainer] = useState(() => document.createElement('div'))

    const [value, setValue] = useState('')
    const [commitMessage, setCommitMessage] = useState('')

    const { repositoryName, branchName, selectedFile } = useAtomValue(repoStoreAtom)

    const { closeFile } = useRepositoryService()

    const { file, loading } = useFile(repositoryName, branchName, selectedFile)
    const commitHandler = useCommit(value, commitMessage, file?.oid)

    useEffect(() => {
        modalContainer.classList.add('modal-root')
        document.body.appendChild(modalContainer)
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.removeChild(modalContainer)
            document.body.style.overflow = 'auto'
        }
    }, [])

    useEffect(() => {
        if (file && !value) setValue(file.text)
    }, [file])

    const onChangeHandler = event => setValue(event.target.value)
    const handleCloseFile = event => {
        if (event.target === event.currentTarget) closeFile()
    }

    return createPortal(
        <Backdrop onClick={handleCloseFile}>
            <Container>
                <Title>markdown-editor.md</Title>
                <MarkdownModal>
                    {loading ? (
                        <TextAreaPreloaderContainer>
                            <PreloaderText width={30} />
                            <PreloaderText width={70} />
                            <PreloaderText width={50} />
                            <PreloaderText />
                            <PreloaderText width={20} />
                            <PreloaderText width={60} />
                            <PreloaderText width={50} />
                            <PreloaderText width={20} />
                            <PreloaderText width={70} />
                            <PreloaderText width={30} />
                        </TextAreaPreloaderContainer>
                    ) : (
                        <Textarea spellCheck={false} value={value} onChange={onChangeHandler} />
                    )}
                </MarkdownModal>
                <Footer>
                    <Input
                        placeholder='Commit message...'
                        value={commitMessage}
                        onChange={e => setCommitMessage(e.target.value)}
                        spellCheck={false}
                    />
                    <Button onClick={commitHandler} disabled={!value || !commitMessage}>
                        Commit Changes
                    </Button>
                </Footer>
            </Container>
        </Backdrop>,
        modalContainer
    )
}

const Container = styled.div`
    min-height: 500px;
    width: 100%;
    max-width: 768px;
`

const Title = styled.h1`
    line-height: 28px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    padding: 0 20px;
    margin: 0 0 16px;
`

const MarkdownModal = styled.div`
    min-height: 500px;
    height: 60vh;
    width: calc(100% - 40px);
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    padding: 20px;
`

const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
`

const Textarea = styled.textarea`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    color: rgba(255, 255, 255, 0.9);
    background-color: transparent;
    line-height: 20px;
    font-family: JetBrainsMono;
    font-size: 14px;
    outline: none;
    resize: none;
`

const TextAreaPreloaderContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
`

const PreloaderText = styled.div`
    height: 14px;
    width: ${({ width }) => width || 40}%;
    background: linear-gradient(90deg, rgba(100, 100, 100, 0.5), rgba(50, 50, 50, 0.1));
    background-size: 600px 100px;
    border-radius: 4px;
    margin: 3px 0 6px;
`

const Footer = styled.div`
    width: 100%;
    height: 28px;
    display: flex;
    justify-content: space-between;
    border-radius: 6px;
    margin-top: 16px;
`

const Input = styled.input`
    height: 28px;
    flex: 1;
    box-sizing: border-box;
    border-radius: 6px;
    border: none;
    line-height: 20px;
    font-family: JetBrainsMono;
    font-size: 14px;
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 4px 20px;
    margin-right: 15px;
`
