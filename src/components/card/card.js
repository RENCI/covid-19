import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Card = styled.div(({ theme }) => `
    // & * { border: 1px solid #f99; }
    border-radius: ${ theme.border.radius };
    overflow: hidden;
    margin-bottom: 3rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${ theme.color.white };
    transition: filter 250ms;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));
    &:hover {
        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));
    }
`)

Card.propTypes = {
    children: PropTypes.node.isRequired,
    elevate: PropTypes.bool.isRequired,
}

Card.defaultProps = {
    elevate: true,
}