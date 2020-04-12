import PropTypes from 'prop-types'
import styled from 'styled-components'

export const CardHeader = styled.div(({ theme }) => `
    display: flex;
    // justify-content: center;
    // align-items: center;
    // text-align: left;
    color: ${ theme.color.darkgrey };
    background-color: inherit;
    font-weight: bold;
    padding: 0.5rem 2rem;
    position: relative;
    font-size: 200%;
    min-height: 4rem;
    padding: ${ theme.padding.normal } ${ theme.padding.normal } 0 ${ theme.padding.normal };
`)

CardHeader.propTypes = {
    fgColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

CardHeader.defaultProps = {
    fgColor: '#fff',
    bgColor: 'var(--color-crimson)',
    children: '',
}

