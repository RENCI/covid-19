import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Subheading } from './subheading'

// 

export const ErrorMessage = styled(Subheading)`
    color: #c66;
    margin: 2rem;
`

ErrorMessage.propTypes = {
    children: PropTypes.node.isRequired,
}
