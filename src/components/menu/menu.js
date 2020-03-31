import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Navbar = styled.nav`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

const MenuItem = styled(Link)(({ theme }) => `
    // flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-decoration: none;
    text-transform: uppercase;
    color: ${ theme.color.black };
    padding: 1rem 2rem;
    transition: color 250ms, border-bottom-color 250ms;
    background-color: transparent;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 6px;
        border-radius: ${ theme.border.radius };
        background-color: ${ theme.color.primary.main };
        transition: opacity 250ms;
        opacity: 0;
    }
    &:hover {
        &::after {
            opacity: 0.25;
        }
    }
    &.active {
        &:hover {
            &::after {
                opacity: 1.0;
            }
        }
        &::after {
            opacity: 1.0;
        }
    }
`)

export const Menu = ({ items }) => {
    return (
        <Navbar>
            { items.map(item => <MenuItem key={ item.text } to={ item.path } activeClassName="active">{ item.text }</MenuItem>) }
        </Navbar>
    )
}