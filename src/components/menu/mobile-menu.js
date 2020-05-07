import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { CloseIcon, HamburgerIcon } from '../icons'
import { useTheme } from '../../hooks'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    bottom: 0;
    z-index: 3;
    background-color: #000000;
    transition: filter 250ms;
    filter: opacity(${ props => props.shaded ? '0.75' : '0' });
    pointer-events: ${ props => props.shaded ? 'auto' : 'none' };
`

const Wrapper = styled.div`
    // & * { border: 2px solid #f99; }
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    // background-color: rebeccapurple;
`

const Toggler = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    z-index: 4;
    position: absolute;
    top: 1rem;
    right: 1rem;
`

const Drawer = styled.div(({ theme, active }) => `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20rem;
    height: 100vh;
    background-color: ${ theme.color.black };
    transition: transform 500ms;
    transform: ${ active ? 'translateX(0)' : 'translateX(-100vw)'};
    padding: 2rem 0 0 0;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`)

const Nav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    padding-right: 2rem;
    flex: 1;
`

const MenuItem = styled(Link)(({ theme }) => `
    padding: 1rem 2rem;
    width: 100%;
    color: ${ theme.color.white };
    letter-spacing: 2px;
    font-size: 125%;
    font-weight: bold;
    text-decoration: none;
    transform: translateX(0);
    height: 4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: color 250ms;
    text-transform: uppercase;
    &:hover::after {
        background-color: ${ theme.color.primary.main }66;
        transform: scaleX(1.0);
    }
    &.active, &.active:hover {
        color: ${ theme.color.black };
        &::after {
            background-color: ${ theme.color.primary.main };
            transform: scaleX(1.0);
        }
    }
    position: relative;
    &::after {
        z-index: -1;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${ theme.color.primary.light }66;
        color: ${ theme.color.white };
        transition: transform 250ms ease-out, background-color 250ms ease-out;
        transform: scaleX(0.0);
        transform-origin: left center;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
`)

export const MobileMenu = ({ items }) => {
    const theme = useTheme()
    const [visible, setVisible] = useState(false)

    const handleToggleMenu = () => setVisible(!visible)
    const handleCloseMenuNow = () => setVisible(false)
    const handleCloseMenu = () => setTimeout(() => setVisible(false), 333)

    useEffect(() => {
        const escapeHatch = e => {
            if (e.keyCode === 27) {
                handleCloseMenuNow()
            }
        }
        if (visible) {
            document.addEventListener('keydown', escapeHatch)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => document.removeEventListener('keydown', escapeHatch)
    }, [visible])

    return (
        <Wrapper>
            <Toggler onClick={ handleToggleMenu } id="menu-toggler" aria-controls="menu-drawer">
                { visible ? <CloseIcon size="36" fill={ theme.color.white } /> : <HamburgerIcon size="36" fill={ theme.color.black }  /> }
            </Toggler>
            <Drawer active={ visible } onKeyDown={ e => console.log(e) } aria-expanded={ visible } id="menu-drawer" aria-labelledby="menu-toggler">
                <Nav>
                    { items.map(item => <MenuItem key={ item.text } to={ item.path } activeClassName="active" onClick={ handleCloseMenu }>{ item.text }</MenuItem>) }
                </Nav>
            </Drawer>
            <Overlay shaded={ visible } onClick={ handleCloseMenuNow } />
        </Wrapper>
    )
}
