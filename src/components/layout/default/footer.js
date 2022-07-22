import styled from 'styled-components'

export const Footer = styled.footer(({ theme }) => `
    background-color: ${ theme.color.black };
    color: #ccc;
    padding: 2rem;
    filter: drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.25));
    /* margin-top: -16rem; */
    padding-top: 10rem;
    padding-bottom: 3rem;
    z-index: 0;
    a, a:active, a:visited {
        color: ${ theme.color.white };
        transition: filter 250ms, text-decoration-color 250ms;
        text-decoration-color: ${ theme.color.white };
        text-underline-offset: 0.1em;
    }
    a:hover, a:active:hover, a:visited:hover {
        filter: brightness(0.75);
        text-underline-offset: 0.1em;
    }
`)
