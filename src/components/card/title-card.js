import React from 'react'
import styled from 'styled-components'
import { Card } from './card'
import { CardHeader } from './card-header'
import { CardBody } from './card-body'
import { Title } from '../typography'

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
    z-index: 9;
    ${ Title } {
        color: ${ theme.color.white };
        padding: 0;
        margin: 0;
    }
`)

const TitleCardBody = styled.div(({ theme }) => `
    flex: 1;
    padding: ${ theme.padding.normal };
    padding-top: ${ theme.padding.extraLarge };
    background-color: inherit;
`)

export const TitleCard = ({ title, children }) => {
    return (
        <Wrapper>
            <TitleCardHeader>
                <Title>{ title }</Title>
            </TitleCardHeader>
            <Card>
                <TitleCardBody>
                    { children }
                </TitleCardBody>
            </Card>
        </Wrapper>
    )
}
