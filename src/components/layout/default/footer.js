import styled from 'styled-components'

export const Footer = styled.footer(({ theme }) => `
    background-color: ${ theme.color.black };
    color: #ccc;
    padding: 2rem;
    filter: drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.25));
    margin-top: -16rem;
    padding-top: 10rem;
    padding-bottom: 4rem;
    z-index: 0;
    & a {
        color: ${ theme.color.white };
    }
`)
