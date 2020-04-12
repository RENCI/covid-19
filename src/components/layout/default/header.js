import styled from 'styled-components'

export const Header = styled.header(({ theme }) => `
    background-color: transparent;
    color: ${ theme.color.black };
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    height: 6rem;
    margin: 1rem 0;
    padding: 0 1rem;
`)
