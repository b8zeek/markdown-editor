import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import gear from '@assets/svgs/gear.svg'

export function Spinner() {
    const [spinnerContainer] = useState(() => document.createElement('div'))

    useEffect(() => {
        spinnerContainer.classList.add('spinner-root')
        document.body.appendChild(spinnerContainer)
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.removeChild(spinnerContainer)
            document.body.style.overflow = 'auto'
        }
    }, [])

    return createPortal(
        <Container>
            <Gear src={gear} />
        </Container>,
        spinnerContainer
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
`

const Gear = styled.img``
