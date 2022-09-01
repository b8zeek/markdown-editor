import styled from 'styled-components'
import { useParams } from 'react-router-dom'

export function Repository() {
    const params = useParams()

    return <div>{JSON.stringify(params)}</div>
}
