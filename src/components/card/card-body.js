import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardBodyContents = styled.div(({ theme }) => `
    flex: 1;
    padding: ${ theme.padding.normal };
    background-color: inherit;
`)

CardBodyContents.propTypes = {
    fgColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
}

CardBodyContents.defaultProps = {
    fgColor: 'inherit',
    bgColor: '#fff',
}

export const CardBody = ({ children, image, style }) => {
    return (
        <CardBodyContents style={ style }>
            { children }
        </CardBodyContents>
    )
}
