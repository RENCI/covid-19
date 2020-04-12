import PropTypes from 'prop-types'
import styled from 'styled-components'

export const CardFooter = styled.div(({
    theme,
    left, center, right
}) => `
    display: flex;
    justify-content: flex-start;
    ${ center && 'justify-content: center' };
    ${ right && 'justify-content: flex-end' };
    align-items: center;
    color: ${ theme.color.black };
    background-color: inherit;
    padding: ${ theme.padding.normal };
    height: 4rem;
`)

CardFooter.propTypes = {
    fgColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

CardFooter.defaultProps = {
    fgColor: '#fff',
    bgColor: 'var(--color-crimson)',
}

