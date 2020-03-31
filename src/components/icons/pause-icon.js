import React from 'react'

export const PauseIcon = ({ size, ...rest }) => {
    return (
        <svg { ...rest } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    )
}
