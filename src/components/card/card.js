import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Card = styled.div(({ theme, dark }) => `
    // & * { border: 1px solid #f99; }
    border-radius: ${ theme.border.radius };
    overflow: hidden;
    margin-bottom: 3rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${ dark ? theme.color.primary.dark : theme.color.white };
    color: ${ dark ? theme.color.white : theme.color.primary.dark };
    opacity: ${ dark ? 0.75 : 1.0 };
    transition: filter 250ms;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));
    &:hover {
        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));
    }
    a, a:active, a:visited {
        color: ${ theme.color.primary.light };
        transition: filter 250ms, text-decoration-color 250ms;
        text-decoration-color: ${ theme.color.primary.light };
        text-underline-offset: 0.1em;
    }
    a:hover, a:active:hover, a:visited:hover {
        filter: brightness(1.25);
        text-decoration-color: ${ theme.color.primary.dark };
        text-underline-offset: 0.1em;
    }
`)

Card.propTypes = {
    children: PropTypes.node.isRequired,
    elevate: PropTypes.bool.isRequired,
}

Card.defaultProps = {
    elevate: true,
}