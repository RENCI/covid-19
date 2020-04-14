import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useWindowWidth } from '../../hooks'
import { Location } from '@reach/router'

const Navbar = styled.nav`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    // position: relative;
    // border: 1px solid #f99;
`

const MenuItem = styled(Link)(({ theme }) => `
    // flex: 1;
    outline: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    text-decoration: none;
    text-transform: uppercase;
    color: ${ theme.color.primary.main };
    padding: 1rem 0;
    font-size: 100%;
    @media (min-width: 900px) {
        padding: 1rem;
        font-size: 120%;
    }
    margin: 0 1rem;
    transition: color 250ms, border-bottom-color 250ms, filter 250ms;
    background-color: transparent;
    &:hover, &:focus {
        filter: brightness(0.5);
        color: ${ theme.color.primary.main };
    }
    &.active, &.active:hover, &.active:focus {
        filter: brightness(1.0);
        color: ${ theme.color.primary.dark };
    }
`)

const Marker = styled.div(({ theme, x, y, width }) => `
    opacity: ${ x && y && width ? 1.0 : 0.0 };
    position: absolute;
    left: 0;
    top: ${ y }px;
    width: 100%;
    height: 6px;
    border-radius: ${ theme.border.radius };
    background-color: ${ theme.color.primary.dark };
    transition: opacity 250ms;
    transition: transform 150ms ease-out, max-width 250ms, opacity 1000ms;
    transform: translateX(${ x }px);
    transform-origin: center center;
    max-width: ${ width }px;
`)

export const Menu = ({ items }) => {
    const { windowWidth } = useWindowWidth()
    const runningInBrowser = typeof window !== 'undefined' && window.location.pathname
    const [markerProperties, setMarkerProperties] = useState({ x: 0, y: 0, height: 0, width: 0 })
    const activeMenuItem = useRef()
    
    const getMarkerCoordinates = () => {
        if (activeMenuItem.current) {
            const { x, y, width, height } = activeMenuItem.current.getBoundingClientRect()
            setMarkerProperties({ x, y, width, height })
        }
    }

    useEffect(() => {
        if (runningInBrowser) {
            activeMenuItem.current = document.querySelector('.active')
            getMarkerCoordinates()
        }
    }, [runningInBrowser, windowWidth])

    return (
        <Location>
            {
                ({ location }) => (
                    <Navbar>
                        { items.map(item => <MenuItem key={ item.text } to={ item.path } activeClassName="active" partiallyActive={ location === item.path }>{ item.text }</MenuItem>) }
                        <Marker x={ markerProperties.x } y={ markerProperties.y + markerProperties.height } width={ markerProperties.width } />
                    </Navbar>
                )
            }
        </Location>
    )
}