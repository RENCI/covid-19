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
    font-size: 120%;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-decoration: none;
    text-transform: uppercase;
    color: ${ theme.color.black };
    padding: 1rem 2rem;
    transition: color 250ms, border-bottom-color 250ms, opacity 250ms;
    background-color: transparent;
    &.active {
        color: ${ theme.color.primary.dark };
    }
    &:hover, &:focus {
        opacity: 0.5;
    }
`)

const Marker = styled.div(({ theme, x, y, width }) => `
    opacity: ${ x && y && width ? 1.0 : 0.0 };
    position: absolute;
    left: 0;
    top: ${ y }px;
    width: 100%;
    height: 8px;
    border-radius: ${ theme.border.radius };
    background-color: ${ theme.color.primary.main };
    transition: opacity 250ms;
    transition: transform 150ms ease-out, max-width 250ms, opacity 1000ms;
    transform: translateX(${ x }px);
    transform-origin: center center;
    max-width: ${ width }px;
`)

export const Menu = ({ items }) => {
    const { windowWidth } = useWindowWidth()
    const [activeIndex, setActiveIndex] = useState()
    const [markerProperties, setMarkerProperties] = useState({ })
    const activeMenuItem = useRef()
    
    const getMarkerCoordinates = () => {
        if (activeMenuItem.current) {
            const { x, y, width, height } = activeMenuItem.current.getBoundingClientRect()
            setMarkerProperties({ x, y, width, height })
        }
    }

    useEffect(() => {
        activeMenuItem.current = document.querySelector('.active')
        getMarkerCoordinates()
    }, [typeof window !== 'undefined' && window.location.pathname, windowWidth])

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