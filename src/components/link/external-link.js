import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from '../button'

import { Link as GatsbyLink } from 'gatsby'
// export const Link = styled(GatsbyLink)``

export const ExternalLink = styled.a.attrs(props => ({
    target: '_blank',
    rel: 'noopener noreferrer',
    href: props.to,
}))``

ExternalLink.propTypes = {
    to: PropTypes.string.isRequired,
}

export const ExternalLinkButton = styled(Button).attrs(props => ({
    as: ExternalLink
}))(({ theme }) => `
    color: ${ theme.color.white } !important;
    text-decoration: none;
`)

export const LinkButton = styled(Button).attrs(props => ({
    as: GatsbyLink
}))(({ theme }) => `
    color: ${ theme.color.white } !important;
    text-decoration: none;
`)

