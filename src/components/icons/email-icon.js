import React from 'react'
import PropTypes from 'prop-types'

export const EmailIcon = ({ size, fill, ...rest }) => {
		return (
	        <svg { ...rest } fill={ fill } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
		)
}


EmailIcon.propTypes = {
    size: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
}

EmailIcon.defaultProps = {
    size: 24,
    fill: '#000',
}