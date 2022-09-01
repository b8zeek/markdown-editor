import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

export function Modal({ text, closeFile }) {
    const [modalContainer] = useState(() => document.createElement('div'))
    const [value, setValue] = useState('')

    useEffect(() => {
        modalContainer.classList.add('modal-root')
        document.body.appendChild(modalContainer)
        document.body.style.overflow = 'hidden'
        setValue(text)

        return () => {
            document.body.removeChild(modalContainer)
            document.body.style.overflow = 'auto'
        }
    }, [])

    return ReactDOM.createPortal(
        <Backdrop onClick={closeFile}>
            <MarkdownModal>
                <Textarea spellCheck={false} value={value} onChange={e => setValue(e.target.value)} />
            </MarkdownModal>
        </Backdrop>,
        modalContainer
    )
}

const MarkdownModal = styled.div`
    min-height: 500px;
    height: 60vh;
    width: 100%;
    max-width: 768px;
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
    font-family: JetBrainsMono;
    outline: none;
    resize: none;
`
