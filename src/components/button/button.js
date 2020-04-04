import React from 'react'
import styled from 'styled-components'

export const Button = styled.button(({ theme }) => `
    background-color: ${ theme.color.primary.main };
    color: ${ theme.color.white };
    border: 0;
    padding: 1rem 2rem;
    border-radius: ${ theme.border.radius };
    cursor: pointer;
    text-transform: uppercase;
    transition: filter 250ms;
    filter: brightness(1.0) drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.2));
    &:hover {
        filter: brightness(1.25) drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.2));
    }
`)
