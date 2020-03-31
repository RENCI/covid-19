import React from 'react'
import PropTypes from 'prop-types'

export const ExpandUpIcon = ({ size, ...rest }) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        height={ `${ size }px` } width={ `${ size }px` }
        viewBox="0 0 16 16"
        { ...rest }
    >
        <path d="M 7.9984227,4.229289 2.3415685,9.886143 3.0486752,10.59325 7.9984227,5.643503 12.948169,10.59325 13.655276,9.886143 Z" />
    </svg>
)

export const ExpandDownIcon = ({ size, ...rest }) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        height={ `${ size }px` } width={ `${ size }px` }
        viewBox="0 0 16 16"
        { ...rest }
    >
        <path d="M 7.9984218,10.59325 13.655276,4.936396 12.948169,4.229289 7.9984218,9.179036 3.0486755,4.229289 2.3415685,4.936396 Z" />
    </svg>
)

const requiredProps = {
    color: PropTypes.string.isRequired,
}

const defaultProps = {
    color: '#fff',
    size: 24,
}

ExpandUpIcon.propTypes = requiredProps
ExpandDownIcon.propTypes = requiredProps

ExpandUpIcon.defaultProps = defaultProps
ExpandDownIcon.defaultProps = defaultProps
