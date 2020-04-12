import styled from 'styled-components'
import PropTypes from 'prop-types'

// 

export const Title = styled.h1(({ theme }) => `
    margin: 2rem 0;
    line-height: 4rem;
    text-transform: uppercase;
    color: ${ theme.color.primary.dark };
    font-size: 200%;
    text-align: left;
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`)

Title.propTypes = {
    children: PropTypes.node.isRequired,
}
