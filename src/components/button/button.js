import React from 'react'
import styled from 'styled-components'

export const Button = styled.button(({ theme, dense = false, type = '' }) => `
    background-color: ${ type ? theme.color[type] : theme.color.primary.main };
    color: ${ theme.color.white };
    border: 0;
    padding: ${ dense ? '0.5rem 1rem' : '1rem 2rem' };
    border-radius: ${ theme.border.radius };
    cursor: pointer;
    text-transform: uppercase;
    transition: filter 250ms, background-color 250ms;
    letter-spacing: 0.1rem;
    filter: brightness(1.0) drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.2));
    &:hover, &:focus {
        filter: brightness(1.25) drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.2));
    }
`)
