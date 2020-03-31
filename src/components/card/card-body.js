import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardBodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const CardBodyContents = styled.div(({ theme }) => `
    flex: 1;
    padding: ${ theme.padding.normal };
    background-color: ${ theme.color.white };
    color: ${ theme.color.black };
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
        <CardBodyWrapper>
            <CardBodyContents style={ style }>
                { children }
            </CardBodyContents>
        </CardBodyWrapper>
    )
}
