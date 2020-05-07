import PropTypes from 'prop-types'
import styled from 'styled-components'

export const CardHeader = styled.div(({ theme }) => `
    display: flex;
    // justify-content: center;
    // align-items: center;
    // text-align: left;
    color: ${ theme.color.darkgrey };
    background: linear-gradient(#f3ffff 0%, ${ theme.color.white } 100%);
    font-weight: bold;
    position: relative;
    font-size: 200%;
    min-height: 4rem;
    padding: ${ theme.padding.normal };
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

