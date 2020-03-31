import React from 'react'
import styled from 'styled-components'
import { AnimateOnMount } from '../anim'

const DEFAULT_WIDTH = "calc(100vw - 4rem)"
const DEFAULT_MAXWIDTH = "1080px"
const TOP_MARGIN = '4rem'
const BOTTOM_MARGIN = '2rem'

export const Container = styled.div`
    // & * { border: 1px solid #f99; }
    width: ${ props => props.width || DEFAULT_WIDTH };
    max-width: ${ props => props.maxWidth || DEFAULT_MAXWIDTH };
    margin: auto;
    ${ props => props.minWidth ? `max-width: ${ props.minWidth };` : undefined }
    ${ props => props.center ? 'margin: auto;' : undefined }
`

export const PageContent = ({ children }) => {
    return (
        <AnimateOnMount>
            <Container>
                { children }
            </Container>
        </AnimateOnMount>
    )
}