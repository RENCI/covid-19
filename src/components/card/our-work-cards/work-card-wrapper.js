import React from 'react'
import PropTypes from 'prop-types'

export const WorkCardWrapper = ({ children }) => {
    return (
        <div style={{
            display: 'inline-flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between', 
            gap: '1rem'
        }}>
            {children}
        </div>
    )
}

WorkCardWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}