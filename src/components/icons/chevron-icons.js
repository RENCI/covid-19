import React from 'react'
import PropTypes from 'prop-types'

const ChevronIcon = ({ size, fill, children, ...rest }) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height={ `${ size }px` } width={ `${ size }px` } fill={ fill } viewBox="0 0 24 24" { ...rest }>
        { children }
    </svg>
)

export const ChevronUpIcon = props => (
    <ChevronIcon { ...props }>
        <path d="M 7.9984227,4.229289 2.3415685,9.886143 3.0486752,10.59325 7.9984227,5.643503 12.948169,10.59325 13.655276,9.886143 Z" />
    </ChevronIcon>
)

export const ChevronDownIcon = props => (
    <ChevronIcon { ...props }>
        <path d="M 7.9984218,10.59325 13.655276,4.936396 12.948169,4.229289 7.9984218,9.179036 3.0486755,4.229289 2.3415685,4.936396 Z" />
    </ChevronIcon>
)

export const ChevronLeftIcon = props => (
    <ChevronIcon { ...props }>
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
    </ChevronIcon>
)

export const ChevronRightIcon = props => (
    <ChevronIcon { ...props }>
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </ChevronIcon>
)

const requiredProps = {
    fill: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
}

const defaultProps = {
    fill: '#fff',
    size: 24,
}

ChevronIcon.propTypes = requiredProps
ChevronIcon.defaultProps = defaultProps
