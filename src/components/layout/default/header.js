import styled from 'styled-components'

export const Header = styled.header(({ theme }) => `
    background-color: transparent;
    color: ${ theme.color.black };
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    height: 6rem;
    padding: 0 2rem;
`)
