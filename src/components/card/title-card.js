import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Card } from './card'
import { Title } from '../typography'
import { useWindowWidth } from '../../hooks'

const Wrapper = styled.div`
    position: relative;
    margin-top: 5rem;
`

const TitleCardHeader = styled.div(({ theme }) => `
    display: flex;
    border-radius: ${ theme.border.radius };
    justfy-content: center;
    align-items: center;
    background-color: ${ theme.color.primary.dark };
    filter: drop-shadow(0 8px 8px #00000033);
    font-weight: bold;
    position: relative;
    min-height: 4rem;
    padding: ${ theme.padding.small };
    position: absolute;
    left: 50%;
    top: -3rem;
    transform: translateX(-50%);
    transition: min-width 250ms;
    z-index: 1;
    min-width: 50%;
    @media (max-width: 798px) {
        min-width: 90%;
    }
    ${ Title } {
        color: ${ theme.color.white };
        text-align: center;
        width: 100%;
        font-size: calc(12pt + 1vmin);
        padding: 0;
        margin: 0;
    }
`)

const TitleCardBody = styled.div(({ topPadding, theme }) => `
    flex: 1;
    padding: ${ theme.padding.normal };
    padding-top: calc(3 * ${ topPadding }px / 4);
    background-color: inherit;
`)

export const TitleCard = ({ title, children, noBody }) => {
    const titleElement = useRef()
    const [cardBodyTopPadding, setCardBodyTopPadding] = useState(0)
    const { windowWidth } = useWindowWidth()
    
    useEffect(() => {
        setCardBodyTopPadding(titleElement.current.scrollHeight)
    }, [titleElement.current, windowWidth])

    return (
        <Wrapper>
            <TitleCardHeader ref={ titleElement }>
                <Title>{ title }</Title>
            </TitleCardHeader>
            {/* <Card style={{visibility: noBody ? "hidden" : "visible"}}>
                <TitleCardBody topPadding={ cardBodyTopPadding }>
                    { children }
                </TitleCardBody>
            </Card> */}
            { !noBody ? (
                <Card>
                    <TitleCardBody topPadding={ cardBodyTopPadding }>
                        { children }
                    </TitleCardBody>
                </Card>
            ) : (
                <div style={{minHeight:'100px'}}/>
            )}
        </Wrapper>
    )
}
