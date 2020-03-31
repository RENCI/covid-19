import styled from 'styled-components'
import PropTypes from 'prop-types'

export const ExternalLink = styled.a.attrs(props => ({
    target: '_blank',
    rel: 'noopener noreferrer',
    href: props.to,
}))``

ExternalLink.propTypes = {
    to: PropTypes.string.isRequired,
}
