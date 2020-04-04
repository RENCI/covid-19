import styled from 'styled-components'
import { Link } from 'gatsby'

export const Brand = styled(Link).attrs({ to: '/' })(({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 120%;
    text-decoration: none;
    color: ${ theme.color.black };
`)
