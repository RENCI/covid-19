import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

WorkCardWrapper.PropTypes = {
    children: PropTypes.node.isRequired,
}