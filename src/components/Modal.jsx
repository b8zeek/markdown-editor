import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'

export function Modal({ children }) {
    const [modalContainer] = useState(() => document.createElement('div'))

    useEffect(() => {
        modalContainer.classList.add('modal-root')
        document.body.appendChild(modalContainer)
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.removeChild(modalContainer)
            document.body.style.overflow = 'auto'
        }
    }, [])

    return ReactDOM.createPortal(children, modalContainer)
}
