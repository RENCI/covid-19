import React from 'react'
import PropTypes from 'prop-types'

export const YoutubeIcon = ({ size, fill, ...rest }) => {
		return (
	        <svg { ...rest } fill={ fill } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 24 24">
                <path d="m12.018 4.2598s-7.1225 0.0014421-8.8984 0.48047c-0.97992 0.26358-1.7518 1.0391-2.0137 2.0254-0.47579 1.7875-0.47656 5.5176-0.47656 5.5176s7.7069e-4 3.7298 0.47656 5.5176c0.2619 0.98613 1.0338 1.7617 2.0137 2.0254 1.776 0.4789 8.8984 0.48047 8.8984 0.48047s7.1206-0.001572 8.8965-0.48047c0.98005-0.26371 1.7518-1.0393 2.0137-2.0254 0.47592-1.7877 0.47656-5.5176 0.47656-5.5176s-6.42e-4 -3.7301-0.47656-5.5176c-0.2619-0.98626-1.0336-1.7618-2.0137-2.0254-1.7758-0.47903-8.8965-0.48047-8.8965-0.48047zm-2.3301 4.6367 5.9531 3.3867-5.9531 3.3867v-6.7734z"/>
            </svg>
		)
}

YoutubeIcon.propTypes = {
    size: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
}

YoutubeIcon.defaultProps = {
    size: 24,
    fill: '#000',
}