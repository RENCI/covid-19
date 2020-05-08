import PropTypes from 'prop-types'
import styled from 'styled-components'

export const CardHeader = styled.div(({ theme }) => `
    display: flex;
    // justify-content: center;
    // align-items: center;
    // text-align: left;
    color: ${ theme.color.primary.dark };
    background: linear-gradient(-30deg, ${ theme.color.primary.light }22 0%, ${ theme.color.white } 100%);
    background-color: ${ theme.color.primary.light }11;
    border-bottom: 1px solid ${ theme.color.primary.light }66;
    font-weight: bold;
    position: relative;
    font-size: 200%;
    min-height: 4rem;
    padding: ${ theme.padding.normal };
    // padding-bottom: 0;
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

